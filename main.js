let GelRef = (selector) => {
  return document.querySelector(selector);
}

let scrollArea = GelRef(".catagori");

function scrollStart() {
  scrollArea.classList.add('scroll');
  setTimeout(() => {
    scrollArea.classList.remove('scroll');
  },2000);
}

scrollArea.addEventListener('scroll', scrollStart);
