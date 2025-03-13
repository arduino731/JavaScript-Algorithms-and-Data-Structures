// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// create todo dom
const generateTodoDOM = (todo, animated) => {
    const todoEl = document.createElement('li')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    todoEl.classList.add('animated')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed 
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        render(todos)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'delete'
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
      todoEl.classList.remove('slideInUp');
      todoEl.classList.add('lightSpeedOut');
      setTimeout(() => {
        removeTodo(todo.id);
        render(todos);
      }, 1000)
    })
    if (todo.animated) {
      todoEl.classList.add('slideInUp');
      delete todo.animated;
    }

    return todoEl;
};

const render = (todos) => {
  document.querySelector('#todos').innerHTML = '';
  todos.forEach((todo) => {
      document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};