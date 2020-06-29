const toDos = [{
    title: `To Do 1`,
    completed: true
}, {
    title: `To Do 2`,
    completed: false
}, {
    title: `To Do 3`,
    completed: false
}];

const sortToDos = (notes) => {
    notes.sort((a, b) => {
        if (a.completed < b.completed) {
            return - 1;
        } else if (a.completed > b.completed) {
            return 1
        } else {
            return 0;
        }
    });
};

const deleteTodo = (toDos, toDoTitle) => {
    const index = toDos.findIndex(toDo => {
        return toDo.title.toLowerCase() === toDoTitle.toLowerCase();
    });
    if (index >= 0) {
        toDos.splice(index, 1);
    }
};

const getToDos = (toDos) => {
    return toDos.filter(toDo => {
        return !toDo.completed;
    });
};

sortToDos(toDos);

console.log(toDos);
// deleteTodo(toDos, `to do 2`);
