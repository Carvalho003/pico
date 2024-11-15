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
                                html += `<div class="foto-users-seguir" style="background-image: url('../uploads/${sugestao.foto}')"></div>`
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