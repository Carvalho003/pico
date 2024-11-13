let user;
const fillPerfil = () => {
     user = JSON.parse(sessionStorage.getItem('user'))


const side = document.querySelector('.side-nav').querySelector('.group-names').querySelectorAll('span');

side[0].innerText = user.nome;
side[1].innerText = user.userName;

if(user.foto != null){
    foto_perfil_user.style.backgroundImage = `url('../uploads/${user.foto}')`
    foto_user_small.style.backgroundImage = `url('../uploads/${user.foto}')`
    foto_post_preview.style.backgroundImage = `url('../uploads/${user.foto}')`
    
}

user_name.innerText = user.userName;


const nome_perfil = document.querySelector('.nome-username').querySelectorAll('span')

console.log(nome_perfil)

nome_perfil[0].innerText = user.nome

nome_perfil[1].innerText = user.userName
}

fillPerfil()
