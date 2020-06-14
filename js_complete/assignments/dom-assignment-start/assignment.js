const taskOneQs = document.querySelector('#task-1');
const taskOneGetEl = document.getElementById('task-1');
const titleOne = document.querySelector('title');
const titleTwo = document.head.querySelector('title');

const h1 = document.querySelector('h1');

taskOneQs.style.backgroundColor = "black";
taskOneGetEl.style.color = "white";

titleOne.textContent = 'Assignment - Solved!';
h1.textContent = titleOne.textContent;