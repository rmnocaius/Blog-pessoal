const btnBackground = document.querySelector('#brilho')

btnBackground.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
    } else {
        document.documentElement.classList.add('dark')
    } 
})

const viewHeader = document.getElementById('header');
const viweNavegation = document.querySelector('.navegation-header');
const viewContent = document.getElementById('content');
const BtnClose = document.querySelector('#fechar')
var showSideBar = false;

const ButtonOnclick = document.querySelector('#btn-onclick');


function toggleSideBar() {
    if(showSideBar) {
        viweNavegation.style.marginLeft = '-100vw';
    } else {
        viweNavegation.style.marginLeft = '-10vw';
    }
    showSideBar = !showSideBar //investe as condiçoes
}

ButtonOnclick.addEventListener('click', toggleSideBar)
BtnClose.addEventListener('click', toggleSideBar)
