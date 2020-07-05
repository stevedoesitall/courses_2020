//Get to-dos from localStorage
const getToDos = () => {
    const toDosJSON = localStorage.getItem('toDos')

    try {
        return toDosJSON ? JSON.parse(toDosJSON) : []
    } catch (e) {
        return []
    }
}

//Save your to-dos
const saveToDos = (toDos) => {
    localStorage.setItem('toDos', JSON.stringify(toDos))
}

//Remove your to-do
const removeToDo = (id) => {
    const toDoIndex = toDos.findIndex(toDo => {
        return toDo.id === id
    })

    if (toDoIndex > -1) {
        toDos.splice(toDoIndex, 1)
    }
}

//Render to-dos to the DOM
const renderToDos = (toDos, filters) => {
    toDosList.innerHTML = ''

    const filteredToDos = toDos.filter(toDo => {
        if (filters.hideCompleted) {
            return toDo.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) && !toDo.completed
        } else {
            return toDo.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
        }
    })

    const incompleteItems = filteredToDos.filter(toDo => {
        return !toDo.completed
    })
        
    const summary = generateSummaryDOM(incompleteItems)

    toDosList.appendChild(summary)

    if (filteredToDos.length > 0) {
        filteredToDos.forEach(toDo => {
            const p = generateToDoDOM(toDo)
            toDosList.appendChild(p)
        })
    } else {
        const p = document.createElement('p')
        p.classList.add('empty-message')
        p.textContent = 'No to-dos to show'
        toDosList.appendChild(p)
    }
}

//Toggle value for to-do
const toggleTodo = (id) => {
    const toDo = toDos.find(toDo => {
        return toDo.id === id
    })
    
    if (toDo) {
        toDo.completed = !toDo.completed
    }
}

const generateToDoDOM = (toDo) => {
    const toDoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const textEl = document.createElement('span')

    //Create checbox and add it to the toDoEl
    const checkbox = document.createElement('input')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = toDo.completed
    containerEl.appendChild(checkbox)

    checkbox.addEventListener('change', () => {
        console.log('Checkbox checked')
        toggleTodo(toDo.id)
        saveToDos(toDos)
        renderToDos(toDos, filters)
    })

    textEl.textContent = toDo.title

    toDoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    toDoEl.appendChild(containerEl)

    //Create button and append it to the textEl
    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    removeButton.addEventListener('click', () => {
        removeToDo(toDo.id)
        saveToDos(toDos)
        renderToDos(toDos, filters)
    })

    textEl.appendChild(removeButton)
    
    containerEl.appendChild(textEl)

    return toDoEl
}

const generateSummaryDOM = (incompleteItems) => {
    const h2 = document.createElement('h2')
    const s = incompleteItems.length === 1 ? '' : 's'
    h2.textContent = `You have ${incompleteItems.length} to-do${s} left!`
    h2.classList.add('list-title')
    return h2
}