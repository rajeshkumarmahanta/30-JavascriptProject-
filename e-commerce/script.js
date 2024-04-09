let barIcon = document.querySelector(".bar-icon");
const toggleBtnIcon = document.querySelector("#bIcn");
const navMenu = document.querySelector(".nav-menu");

barIcon.addEventListener("click", () => {
  if (toggleBtnIcon.classList[1] === "fa-bars") {
    toggleBtnIcon.classList.remove("fa-bars");
    toggleBtnIcon.classList.add("fa-x");
  } else {
    toggleBtnIcon.classList.remove("fa-x");
    toggleBtnIcon.classList.add("fa-bars");
  }
  navMenu.classList.toggle("activeNav");
});

const barIconThird = document.querySelector(".bar-icon-third");
const bIcnThird = document.querySelector("#bIcnThird");
const thirdMenuItems = document.querySelector(".third-menu-items");
barIconThird.addEventListener("click", () => {
  if (bIcnThird.classList[1] === "fa-bars") {
    bIcnThird.classList.remove("fa-bars");
    bIcnThird.classList.add("fa-x");
  } else {
    bIcnThird.classList.remove("fa-x");
    bIcnThird.classList.add("fa-bars");
  }
  // console.log('activeThirdMenu')
  thirdMenuItems.classList.toggle("activeThirdMenu");
});
// cart popuop
const cart = document.querySelector(".cart");
const cartIconX = document.querySelector(".cart-icon-bar");
const cartPopup = document.querySelector(".cart-popup");
const overlayCart = document.querySelector(".overlay-cart");
cart.addEventListener("click", () => {
  // console.log('cart clicked');
  cartPopup.classList.add("cart-popup-active");

  overlayCart.classList.add("showOverly");
});
cartIconX.addEventListener("click", () => {
  cartPopup.classList.remove("cart-popup-active");

  overlayCart.classList.remove("showOverly");
});
overlayCart.addEventListener("click", (e) => {
  if (e.target == overlayCart) {
    cartPopup.classList.remove("cart-popup-active");
    overlayCart.classList.remove("showOverly");
  }
  //console.log(e.target)
});
// login form

const loginModal = document.querySelector(".login-modal");
const inner = document.querySelector(".inner");
const login = document.querySelector(".login");
const CloseLoginForm = document.querySelector(".close-login-form");

login.addEventListener("click", () => {
  inner.classList.add("activeLoginform");
  loginModal.classList.remove("login-modal-visible");
});
CloseLoginForm.addEventListener("click", () => {
  inner.classList.remove("activeLoginform");
  loginModal.classList.add("login-modal-visible");
});
loginModal.addEventListener("click", (e) => {
  if (e.target == loginModal) {
    inner.classList.remove("activeLoginform");
    loginModal.classList.add("login-modal-visible");
  }
});
// multiple card slider
const sliderContainer = document.querySelector(".card-slider-inner");
const leftBtn = document.querySelector(".slide-left");
const RightBtn = document.querySelector(".slide-right");
sliderContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  sliderContainer.scrollLeft = sliderContainer.scrollLeft + e.deltaY;
});
leftBtn.addEventListener("click", () => {
  sliderContainer.scrollLeft = sliderContainer.scrollLeft - 300;
});
RightBtn.addEventListener("click", () => {
  sliderContainer.scrollLeft = sliderContainer.scrollLeft + 300;
});
const sliderContainerOnsale = document.querySelector("#cardSliderInner");
const leftBtOnsale = document.querySelector("#slideleftonsale");
const RightBtnOnsale = document.querySelector("#sliderightonsale");
sliderContainerOnsale.addEventListener("wheel", (e) => {
  e.preventDefault();
  sliderContainerOnsale.scrollLeft =
    sliderContainerOnsale.scrollLeft + e.deltaY;
});
leftBtOnsale.addEventListener("click", () => {
  sliderContainerOnsale.scrollLeft = sliderContainerOnsale.scrollLeft - 300;
});
RightBtnOnsale.addEventListener("click", () => {
  sliderContainerOnsale.scrollLeft = sliderContainerOnsale.scrollLeft + 300;
});

// sticky nav bar
window.addEventListener("scroll", () => {
  const navBarSticky = document.querySelector(".navBar-Sticky");

  if (window.pageYOffset >= 54) {
    navBarSticky.classList.add('sticky')
  }else{
    navBarSticky.classList.remove('sticky')

  }
  // console.log('hello')54
});

