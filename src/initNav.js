const initNav = () => {
  const nav = document.querySelector('.navbar')
  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 300) {
      nav.classList.add('background');
    } else {
      nav.classList.remove('background');
    }
  })
}

export { initNav }
