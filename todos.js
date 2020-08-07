const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

const todos = JSON.parse(localStorage.getItem('todo_list'));

const renderTodos = () => {
    listElement.innerHTML = '';

    for (todo of todos) {
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(todo);

        const linkElement = document.createElement('a');
        const linkText = document.createTextNode(' Excluir');

        linkElement.setAttribute('href', '#');

        const position = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

const addTodo = () => {
    const todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveTodo();
}

buttonElement.onclick = addTodo;

const deleteTodo = position => {
    todos.splice(position, 1);
    renderTodos();
    saveTodo();
}

const saveTodo = () => {
    localStorage.setItem('todo_list', JSON.stringify(todos));
}