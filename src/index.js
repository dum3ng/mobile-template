require('~/assets/styles/global.scss')

const title = document.querySelector('.page-title')
title.onclick = () => {
  title.classList.toggle('red')
}
