'use strict'

const toDos = getToDos()
const filters = {
    searchTerm: '',
    hideCompleted: false
}

const toDosList = document.querySelector('#todos-list')

renderToDos(toDos, filters)

document.querySelector('#filter-todos').addEventListener('input', (e) => {
    filters.searchTerm = e.target.value
    renderToDos(toDos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    toDos.push({
        id: uuidv4(),
        title: e.target.elements.newToDo.value,
        completed: false
    })
    
    saveToDos(toDos)

    renderToDos(toDos, filters)
    e.target.elements.newToDo.value = ''
})

document.querySelector('#toggle-todos').addEventListener('change', (e) => {

    filters.hideCompleted = e.target.checked

    renderToDos(toDos, filters)
    
})