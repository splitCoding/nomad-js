const name = document.querySelector('input[type="text"]');
const login_btn = document.querySelector('form');
const greeting = document.querySelector('.greeting');
const logout_btn = document.querySelector('.logout');
login_btn.addEventListener('submit',login);
logout_btn.addEventListener('click', logout);

function remove_hidden(target){
  target.classList.remove('hidden');
}

function add_hidden(target){
  target.classList.add('hidden');
}

function id_exist(){
  if(localStorage.getItem("id") === null){
    remove_hidden(login_btn);
    add_hidden(greeting);
  } else {
    add_hidden(login_btn);
    remove_hidden(greeting);
    greeting.innerHTML = `Hello ${localStorage.getItem('id')}`;
  }
}

function login(event){
  event.preventDefault();
  localStorage.setItem("id",name.value);
  id_exist();
}

function logout(event){
  localStorage.removeItem('id');
  id_exist();
}


