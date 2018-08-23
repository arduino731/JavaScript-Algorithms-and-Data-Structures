const todos = [
  {
    id: "d3bcccc7-14e6-4c13-915f-c442107fe2bc",
    text: 'test 1',
    completed: false
  },
  {
    id: "dd46ebd3-c23b-4d57-8f36-746affd8b7ce",
    text: 'test 2',
    completed: true
  }
];

render(todos);

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.elements.text.value.length > 0) {
      document.querySelector('#form-error-message').classList.replace('fadeIn', 'fadeOut');
      todos.push({
          id: uuidv4(),
          text: e.target.elements.text.value,
          completed: false,
          animated: true
      })
      render(todos); // refresh function list and add new todo
      // saveTodos(todos) will be save and store data
      e.target.elements.text.value = '';
      setTimeout(() => {
        document.querySelector('#form-error-message').textContent = '';
        document.querySelector('#form-error-message').classList.remove('show', 'fadeOut'); // this must be delay when use bounceOut
      }, 600);
    } else {
      // show error message
      document.querySelector('#form-error-message').textContent = 'You need to add text.';
      document.querySelector('#form-error-message').classList.add('show', 'fadeIn');
    }
})

