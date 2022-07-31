const container = document.querySelector('.container');

//BURGER
const burgerBtn = document.querySelector('.burger__btn');
const burger__btn_close = document.querySelector('.burger__btn-close');
const navList = document.querySelector('.header__nav');

//open burger
burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active');
  navList.classList.toggle('active');
  burger__btn_close.classList.toggle('active');
});

//close burger
container.addEventListener('click', function (e) {
  let evTarget = e.target;
  if (
    evTarget !== navList &&
    navList.classList.contains('active') &&
    evTarget !== burgerBtn &&
    evTarget.parentNode !== burgerBtn
  ) {
    console.log(burgerBtn.firstChild);
    burgerBtn.classList.remove('active');
    navList.classList.remove('active');
    container.classList.remove('active');
    burger__btn_close.classList.remove('active');
  }
});

//POPUP
const popup = document.querySelector('.popup');
const headerBtn = document.querySelector('.header__btn');
const accBtn = document.querySelector('.account');
let shadow = document.querySelector('.shadow__null');
let popupHeader = document.querySelector('.popup__header');
let popupBtnFacebook = document.querySelector('.btn__facebook');
let popupBtnGoogle = document.querySelector('.btn__google');
let popupCenter = document.querySelector('.popup__center');
let btnSignIn = document.querySelector('.btn__SignIn');
let popupForgotPassword = document.querySelector('.forgot');
let popupDescription = document.querySelector('.popup__description');
let popupRegister = document.querySelector('.register');
let changePopupRegister = document.querySelector('.popup__register__btn');
let popupForm = document.querySelector('.popup__form');
let popupInput1 = document.querySelector('.popup__email');
let popupInput2 = document.querySelector('.popup__passsword');
let registerBtn = document.querySelector('.register');

//open popup before click desctop
headerBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
  shadow.classList.toggle('shadow');
  if (popupBtnFacebook.classList.contains('remove')) {
    changePopup();
  }
});

//open popup before click mobile
accBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
  shadow.classList.toggle('shadow');
  if (popupBtnFacebook.classList.contains('remove')) {
    changePopup();
  }
});

//close popup before click outside
shadow.addEventListener('click', (event) => {
  if (event.target.classList.contains('shadow')) {
    popup.classList.toggle('active');
    shadow.classList.toggle('shadow');
  }
});

//call alert with form values
function alertLogin() {
  let email = form.email.value;
  let password = form.password.value;
  alert(`Email: ${email}\nPassword: ${password}`);
}

btnSignIn.addEventListener('click', alertLogin);

//change popup after click on register button
const createAccount = 'Create account';
const signUp = 'Sign Up';
const logIn = 'Log In';
const alredyDescription = 'Already have an account?';

const loginAccount = 'Log in to your account';
const signIn = 'Sign In';
const reg = 'Register';
const dontHaveAccount = 'Don’t have an account?';

function changePopup() {
  //change popup
  popupBtnFacebook.classList.toggle('remove');
  popupBtnGoogle.classList.toggle('remove');
  popupCenter.classList.toggle('remove');
  popupForgotPassword.classList.toggle('remove');
  btnSignIn.textContent = signIn;
  popupHeader.textContent = loginAccount;
  popupDescription.textContent = alredyDescription;
  changePopupRegister.textContent = reg;
}

function returnChangePopup() {
  //return
  popupBtnFacebook.classList.toggle('remove');
  popupBtnGoogle.classList.toggle('remove');
  popupCenter.classList.toggle('remove');
  popupForgotPassword.classList.toggle('remove');
  btnSignIn.textContent = signUp;
  popupHeader.textContent = createAccount;
  popupDescription.textContent = dontHaveAccount;
  changePopupRegister.textContent = logIn;
}

function checkRemove() {
  //examination
  popupBtnFacebook.classList.contains('remove')
    ? changePopup()
    : returnChangePopup();
}

registerBtn.addEventListener('click', checkRemove);

//SLIDER
const slider = document.querySelector('.destinations__slider');
const slides = document.querySelectorAll('.slider__item');
const slide1 = document.querySelector('.slide__1');
const slide2 = document.querySelector('.slide__2');
const slide3 = document.querySelector('.slide__3');
let slide1_1 = document.querySelector('.slide__1-1');
let slide3_1 = document.querySelector('.slide__3-1');
const dot1 = document.querySelector('.dot_1');
const dot2 = document.querySelector('.dot_2');
const dot3 = document.querySelector('.dot_3');

slide1.addEventListener('click', function () {
  slider.style.transform = 'translateX(850px)';
  slide3.style.transform = 'translateX(0px)';
  dot1.classList.add('dot__active');
  dot2.classList.remove('dot__active');
  dot3.classList.remove('dot__active');
  if ((slide1.style.transform = 'translateX(4300px)')) {
    slide1.style.transform = 'translateX(0px)';
  }
});

slide2.addEventListener('click', function () {
  slider.style.transform = 'translateX(0px)';
  slide1.style.transform = 'translateX(0px)';
  dot2.classList.add('dot__active');
  dot1.classList.remove('dot__active');
  dot3.classList.remove('dot__active');
  if ((slide3.style.transform = 'translateX(-4300px)')) {
    slide3.style.transform = 'translateX(0px)';
  }
});

slide3.addEventListener('click', function () {
  slider.style.transform = 'translateX(-850px)';
  slide1.style.transform = 'translateX(0px)';
  dot3.classList.add('dot__active');
  dot1.classList.remove('dot__active');
  dot2.classList.remove('dot__active');
  if ((slide3.style.transform = 'translateX(-4300px)')) {
    slide3.style.transform = 'translateX(0px)';
  }
});

slide3_1.addEventListener('click', function () {
  slider.style.transform = 'translateX(-850px)';
  slide1.style.transform = 'translateX(0px)';
  dot3.classList.add('dot__active');
  dot1.classList.remove('dot__active');
  dot2.classList.remove('dot__active');
  if ((slide3.style.transform = 'translateX(-4300px)')) {
    slide3.style.transform = 'translateX(0px)';
  }
});

slide1_1.addEventListener('click', function () {
  slider.style.transform = 'translateX(850px)';
  slide3.style.transform = 'translateX(0px)';
  dot1.classList.add('dot__active');
  dot2.classList.remove('dot__active');
  dot3.classList.remove('dot__active');
  if ((slide1.style.transform = 'translateX(4300px)')) {
    slide1.style.transform = 'translateX(0px)';
  }
});

//mobile slider

const sliderArrow = document.querySelector('.slider__arrow');
const sliderBtnLeft = document.querySelector('.left');
const sliderBtnRight = document.querySelector('.right');

const mobile = function () {
  dot2.classList.add('dot__active');
  sliderBtnRight.style.opacity = '1';
  sliderBtnLeft.style.opacity = '1';
};

mobile();

slide1.addEventListener('click', function () {
  if ((sliderArrow.style.display = 'block')) {
    slider.style.transform = 'translateX(20%)';
  }
});
slide3.addEventListener('click', function () {
  if ((sliderArrow.style.display = 'block')) {
    slider.style.transform = 'translateX(0%)';
  }
});
slide3.addEventListener('click', function () {
  if ((sliderArrow.style.display = 'block')) {
    slider.style.transform = 'translateX(-20%)';
  }
});

sliderBtnLeft.addEventListener('click', () => {
  if (dot3.classList.contains('dot__active')) {
    slider.style.transform = 'translateX(0%)';
    dot1.classList.remove('dot__active');
    dot2.classList.add('dot__active');
    dot3.classList.remove('dot__active');
    sliderBtnRight.style.opacity = '1';
    sliderBtnLeft.style.opacity = '1';
  } else {
    slider.style.transform = 'translateX(20%)';
    dot1.classList.add('dot__active');
    dot2.classList.remove('dot__active');
    dot3.classList.remove('dot__active');
    sliderBtnRight.style.opacity = '1';
    sliderBtnLeft.style.opacity = '0.5';
  }
});

sliderBtnRight.addEventListener('click', () => {
  if (dot1.classList.contains('dot__active')) {
    slider.style.transform = 'translateX(0%)';
    dot1.classList.remove('dot__active');
    dot2.classList.add('dot__active');
    dot3.classList.remove('dot__active');
    sliderBtnRight.style.opacity = '1';
    sliderBtnLeft.style.opacity = '1';
  } else {
    slider.style.transform = 'translateX(-20%)';
    dot1.classList.remove('dot__active');
    dot2.classList.remove('dot__active');
    dot3.classList.add('dot__active');
    sliderBtnRight.style.opacity = '0.5';
    sliderBtnLeft.style.opacity = '1';
  }
});
