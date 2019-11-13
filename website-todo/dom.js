let todos = ["Masak", "Tidur", "Mandi"];

todos.map(element => {
    let li = document.createElement("li");
    let text = document.createTextNode(element);
    li.appendChild(text);
    document.getElementById("listTodos").appendChild(li);
});

let addTodos = () => {};

let countMe = event => {
    event.preventDefault();
    let newTodo = document.getElementById("todo").value;

    let li = document.createElement("li");
    let text = document.createTextNode(newTodo);
    li.appendChild(text);
    document.getElementById("listTodos").appendChild(li);
    localStorage.setItem("todos", todos);
    sessionStorage.setItem("todos", todos);
};

document.getElementById("submitButton").addEventListener("click", e => {
    e.preventDefault();
    console.log("teset"); // window, if global, or else, your context
});

let keyUp = () => {
    console.log(document.getElementById("todo").value);
};

let checkWheel = () => {};
