const imgOpenMenu = document.querySelector('#openMenu')

const headerList = document.querySelector('#list')

const linksItemMenu = document.querySelectorAll('.header__list-item a')

imgOpenMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
  headerList.classList.toggle('header__list--toggle')
  linksItemMenu.forEach(item => {
    item.addEventListener('click', () => {
      headerList.classList.remove('header__list--toggle')
    })
  })
}