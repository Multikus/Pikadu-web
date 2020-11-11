// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login')
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordinput = document.querySelector('.login-password');
const loginSignIn = document.querySelector('.login-signIn');
const loginSignUp = document.querySelector('.login-signUp');

const userElem = document.querySelector('.user');
const usernameElem = document.querySelector('.user-name');

const listUsers = [
  {
    id: '01',
    email: 'nick@MediaList.com', 
    password: '12345',
    dispalyName: 'NickJS'
  },
  {
    id: '02',
    email: 'kate@MediaList.com', 
    password: '123456',
    dispalyName: 'KateKillMaks'
  }
];

const setUsers = { //объект для управления настройками 
  user: null,

  logIn(email, password, handler) { //вывод данных
    const user = this.getUser(email);
    if(user && user.password === password){
      this.authorisetUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден');
    }
  },

  logOut() {
    console.log('Выход: ');

  },

  signUp(email, password, handler) {
    if(!this.getUser(email)){
      const user = {email, password, dispalyName: email.split('@')[0]};
      listUsers.push(user);
      this.authorisetUser(user);
      handler();
    } else {
      alert('Такой пользователь уже есть');
    }
    console.log(listUsers);
  },

  getUser(email){
    return listUsers.find((item)=> {
      return item.email === email
    })
  },

  authorisetUser(user) {
    this.user = user;
  }
}

const toggleAuthDom = () => {
  const user = setUsers.user;
  if(user) {
    loginElem.style.display = 'none';
    userElem.style. display = '';
    usernameElem.textContent = user.dispalyName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none'
  }
};

toggleAuthDom();


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  setUsers.logIn(emailInput.value, passwordinput.value, toggleAuthDom);//получение данные
});

loginSignUp.addEventListener('click', event => {
  event.preventDefault();
  setUsers.signUp(emailInput.value, passwordinput.value, toggleAuthDom);//получение данные
  setUsers.signUp();
});