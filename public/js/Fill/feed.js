const user = JSON.parse(sessionStorage.getItem('user'))
const navUsername = document.querySelector('.sugestion-area').querySelector('.nav-head').querySelector('#user_name');
const sideUsername = document.querySelector('.side-nav').querySelector('.group-names').querySelector('.user_name');
document.body.onload = () => {

    if(!user.userName){
        modalUsername.style.display = 'flex';
    }

    span_nome_user.innerText = user.nome;
    navUsername.innerText = user.userName;
    sideUsername.innerText = user.userName;
}

const reFill = () => {
    span_nome_user.innerText = user.nome;
    navUsername.innerText = user.userName;
    sideUsername.innerText = user.userName;
}