const imgOpenMenu = document.querySelector('#openMenu')

imgOpenMenu.addEventListener('click', toggleMenu)

const headerList = document.querySelector('#list')

function toggleMenu() {
  headerList.classList.toggle('header__list--toggle')
}