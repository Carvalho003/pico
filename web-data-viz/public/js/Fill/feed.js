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

    if(user.foto != null){
        foto_user_feed.style.backgroundImage = `url('../uploads/${user.foto}')`
        foto_user_feed_side.style.backgroundImage = `url('../uploads/${user.foto}')`
        foto_post_preview.style.backgroundImage = `url('../uploads/${user.foto}')`
        
    }
}

const reFill = () => {
    span_nome_user.innerText = user.nome;
    navUsername.innerText = user.userName;
    sideUsername.innerText = user.userName;
}

const getSugestoes = () => {
    fetch(`api/seguidores/sugestoes/${user.id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        console.log(res)
        let html = ``
        res.map(sugestao => {
            html += `<div class="flex row">
                            `
                            if(sugestao.foto != null){
                                html += `<div class="foto-users-seguir" style="backgroundImage: url('../uploads/${sugestao.foto}')"></div>`
                            }else {
                                
                                html += `<div class="foto-users-seguir"></div>`
                            }
                            html += `<p class="nome-user-seguir">${sugestao.nome}</p>
                            <button class="btn-seguir" onclick="seguir(${sugestao.id})">Seguir</button>
                        </div>`
        } )

        div_sugestoes.innerHTML = html
    })
}

getSugestoes()