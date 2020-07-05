'use strict'

const toDos = getToDos()
const filters = {
    searchTerm: '',
    hideCompleted: false
}

const toDosList = document.querySelector('#todos')

renderToDos(toDos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchTerm = e.target.value
    renderToDos(toDos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const title = e.target.elements.newToDo.value.trim()
    if (title !== '') {
        toDos.push({
            id: uuidv4(),
            title: title,
            completed: false
        })
        
        saveToDos(toDos)
    
        renderToDos(toDos, filters)
        e.target.elements.newToDo.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {

    filters.hideCompleted = e.target.checked

    renderToDos(toDos, filters)
    
})