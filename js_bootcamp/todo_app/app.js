const toDos = [{
    title: `Clean Room`,
    completed: true
}, {
    title: `Do Laundry`,
    completed: true
}, {
    title: `Cook Dinner`,
    completed: false
}];

const filters = {
    searchTerm: '',
    hideCompleted: false
};

const toDosList = document.querySelector('#todos-list');

const renderToDos = (toDos, filters) => {
    toDosList.innerHTML = '';

    const filteredToDos = toDos.filter(toDo => {
        if (filters.hideCompleted) {
            return toDo.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) && !toDo.completed;
        } else {
            return toDo.title.toLowerCase().includes(filters.searchTerm.toLowerCase());
        }
        });
    console.log(filteredToDos);

    const incompleteItems = filteredToDos.filter(toDo => {
        return !toDo.completed;
    });

    const h2 = document.createElement(`h2`);

    h2.textContent = `You have ${incompleteItems.length} to-dos left!`;

    toDosList.appendChild(h2);

    filteredToDos.forEach(toDo => {
        const p = document.createElement(`p`);
        toDosList.appendChild(p);
        p.textContent = toDo.title;
    });
};

renderToDos(toDos, filters);

document.querySelector('#filter-todos').addEventListener('input', (e) => {
    filters.searchTerm = e.target.value;
    renderToDos(toDos, filters);
});

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    toDos.push({
        title: e.target.elements.newToDo.value,
        completed: false
    });
    renderToDos(toDos, filters);
    e.target.elements.newToDo.value = '';
});

document.querySelector('#toggle-todos').addEventListener('change', (e) => {

    filters.hideCompleted = e.target.checked;

    renderToDos(toDos, filters);
    
});