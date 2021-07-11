const todolist_form = document.querySelector('.todolist_form');
const todolist = document.querySelector('.todolist');
const input = todolist_form.querySelector('input');
todolist_form.addEventListener('submit',todo);

let todoArray = [];

function init(){
  let todoArray_saved = JSON.parse(localStorage.getItem('todos'));
  if(todoArray_saved !== null){
    todoArray_saved.forEach(showtodo);
  }
}

init();

function todo(e){
  e.preventDefault();
  add_todo();
  input.value ='';
}

function add_todo(){
  let todoObject = { name : input.value, id : Date.now() }
  todoArray.push(todoObject);
  localStorage.setItem('todos',JSON.stringify(todoArray));
  showtodo(todoObject);
}

function showtodo(element){
  let newTodo = document.createElement('li');
  let newSpan = document.createElement('span');
  let newBtn = document.createElement('button');

  newTodo.classList.add(element.id);
  newSpan.innerText = element.name;
  newBtn.innerText = 'X';
  newBtn.addEventListener('click',deleteBtn);
  
  newTodo.append(newSpan);
  newTodo.append(newBtn);
  todolist.append(newTodo);
}

function deleteBtn(e){
  const parent = e.target.parentNode;
  parent.remove();
  let todoArray_saved = JSON.parse(localStorage.getItem('todos'));

  localStorage.setItem('todos', JSON.stringify(todoArray_saved.filter((item)=>{
    if(!(parent.classList.contains(item.id))){
      return item;
    }
  })))
}