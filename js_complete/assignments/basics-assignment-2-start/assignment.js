const task3Element = document.getElementById('task-3');

function showAlert() {
    alert("Hi");
}

function showAlertWithName(name) {
    alert(name);
}

function concatStrings(val1, val2, val3) {
    return val1 + val2 + val3;;
}

showAlert();
showAlertWithName("Bobby");

alert(concatStrings("A", "B", "C"));

task3Element.addEventListener("click", showAlert);