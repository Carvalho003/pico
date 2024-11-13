const modalPublicacao = document.getElementById('modal_publicacao');
const backdropModal = document.getElementById('backdrop');
const body = document.querySelector('body');

const menuNav = document.querySelector('.menu-nav');

let modalAberto = false;
let abriu = false;

const abrirOpcoes = () => {
    menuNav.classList.toggle('toggle');
}
 
const abrirOpcoesPublicacao = (element) => {
    element.querySelector('.menu-pub').classList.toggle('toggle-pub')
    abrirOpcoes()
}

const createPub = () => {
    try{
    div_arquivos_post.style.display = 'flex'
    preview_area_post.innerHTML = ``
    }catch(e){
        
    }
    backdropModal.style.display = 'flex';
    modalAberto = true;
}

const fecharPub = () => {
    backdropModal.style.display = 'none';
}

backdropModal.addEventListener('click', (event) => {
    if(!event.target.closest('.modal')){
        backdropModal.style.display = 'none';
    }
})


