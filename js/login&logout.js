const name = document.querySelector('input[type="text"]');
const login_btn = document.querySelector('form');
const greeting = document.querySelector('.greeting');
const logout_btn = document.querySelector('.logout');
const todo_form = document.querySelector('.todolist_form');

function remove_hidden(target){ target.classList.remove('hidden'); };
function add_hidden(target){ target.classList.add('hidden'); };

function id_exist(){
  if(localStorage.getItem("id") === null){
    remove_hidden(login_btn);
    add_hidden(greeting);
    add_hidden(logout_btn);
    add_hidden(todo_form);
  } else {
    add_hidden(login_btn);
    remove_hidden(logout_btn);
    remove_hidden(greeting);
    remove_hidden(todo_form);
    greeting.innerHTML = `Hello ${localStorage.getItem('id')}`;
  }
}

login_btn.addEventListener('submit',login);

function login(event){
  event.preventDefault();
  localStorage.setItem("id",name.value);
  id_exist();
}

logout_btn.addEventListener('click', logout);

function logout(event){
  localStorage.clear();
  id_exist();
  name.value = "";
  todolist.innerHTML =""
  todoArray = [];
}

id_exist();




