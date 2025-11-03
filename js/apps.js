const menuIcon = document.getElementById("menu-icon");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

menuIcon.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  });

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  });

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
    });

let scroll = document.querySelector('.scroll');
window.addEventListener('scroll', function () {
  
  let topToBottomRange = window.scrollY;

  if (topToBottomRange > 200) {
    scroll.classList.add('scroll_active');
  }
  else{
    scroll.classList.remove('scroll_active')
  }

});


let body = document.querySelector('body');
let progressScroll = document.querySelector('.progressScroll');

window.addEventListener('scroll', function () {
  let totalScrollHeight = body.clientHeight - window.innerHeight;
  let topToBottomRange = window.scrollY;

  let result = Math.round((100 * topToBottomRange / totalScrollHeight));


  progressScroll.style.width = result + '%';

});