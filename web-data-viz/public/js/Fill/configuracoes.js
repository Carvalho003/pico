const user = JSON.parse(sessionStorage.getItem('user'))

const side = document.querySelector('.side-nav').querySelector('.group-names').querySelectorAll('span');

side[0].innerText = user.nome;
side[1].innerText = user.userName;

user_name.innerText = user.userName;

if(user.foto != null){
    foto_user_config.style.backgroundImage = `url('../uploads/${user.foto}')`
    foto_user_small.style.backgroundImage = `url('../uploads/${user.foto}')`
}
console.log(side)