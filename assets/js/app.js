const switchThemeBtn = document.querySelector('.header-right__wrapper-switch');
const bodyElem = document.querySelector('body');
switchThemeBtn.addEventListener('click', () => {
    bodyElem.classList.toggle('light')

    if (bodyElem.className.includes('light')) {
        localStorage.setItem('theme', 'light')
    } else {
        localStorage.setItem('theme', 'dark')
    }
})
window.addEventListener('load', () => {
    let userTheme = localStorage.getItem('theme');
    if (userTheme === 'light') {
        bodyElem.classList.add('light')
    }
})