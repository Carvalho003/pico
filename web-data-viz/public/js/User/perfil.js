const urlPerfil = (window.location.href).split('/')

const infosQuant = document.querySelectorAll('.info-quant')

const id = urlPerfil[urlPerfil.length - 1];

fetch(`http://localhost:3333/api/users/${id}/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    console.log(data)

    const nomeEUserName = document.querySelector('.nome-username').querySelectorAll('span');
    const fotoCapa = document.querySelector('.capa-perfil');
    if(data.fotoCapa != null){
        fotoCapa.style.backgroundImage = `url('${data.fotoCapa}'`;
    }

    if(data.id != user.id){
        nomeEUserName[0].innerText = data.nome
        nomeEUserName[1].innerText = data.userName
        if(data.foto != null){
            document.querySelector('.foto-perfil').style.backgroundImage = `url('${data.foto}')`;
        }
        document.querySelector('.editar').style.display = 'none';
        document.querySelector('.create-div-perfil').style.display = 'none'
        perfil_li.classList.remove('active')
    }

    
})

fetch(`http://localhost:3333/api/seguidores/count/seguidores/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    console.log(data)
    infosQuant[1].querySelectorAll('span')[1].innerText = data[0].seguidores
})

fetch(`http://localhost:3333/api/seguidores/count/seguindo/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    console.log(data)
    
        infosQuant[2].querySelectorAll('span')[1].innerText = data.seguindo
    
})

fetch(`http://localhost:3333/api/posts/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    console.log(data);
    const elementosCarregarAnexos = [];
    let qtd = 0;
    if(data.length){
        qtd = data.length
        let html = "";
        data.map(publicacao => {
            html += `<div class="post post-perfil flex column">
                    <div class="infos-user-post between a-center flex row">
                        <div class="group-foto-nome-post a-center flex row">
                            <div` 
                            if(user.foto){
                            html += ` style="background-image: url('${user.foto}')" `
                            }
                            html += ` class="foto-user-post"></div>
                            <div class="name-time flex column">
                                <span id="nome_user">${user.nome}</span>
                                <span id="tempo" class="text-fade">${publicacao.tempo}</span>
                            </div>
                        </div>
                        <i class='bx bx-dots-vertical-rounded'></i>
                    </div>
                    <div class="post-content flex column a-start">
                        <p id="desc_post">${publicacao.descricao}</p>`
                        if(publicacao.anexos != 'SEM ANEXO'){
                        
                            html += `<div id="carregar${publicacao.id}" onclick="carregarAnexos(this)" class="anexos_post">`
                            publicacao.anexos.map(anexo => {
                            
                                html += `<div class="foto-post"></div>`

                                })
                            
                            html += `</div>`

                             elementosCarregarAnexos.push(`carregar${publicacao.id}`)
                            

                            
                       
                        }
                        
                    html += `</div>
                    <div class="post_interaction flex row a-center">
                        <div class="group-interaction-icon a-center flex row">
                            <i class='bx bxs-like text-fade' ></i>
                            <span>${publicacao.likes}</span>
                        </div>
                        <div class="group-interaction-icon a-center flex row">
                            <i class='bx bx-comment-dots text-fade'></i>
                            <span>Comentar</span>
                        </div>

                        <div class="group-interaction-icon a-center flex row">
                            <i class='bx bx-share text-fade' ></i>
                            <span>Compartilhar</span>
                        </div>
                    </div>

                </div>`
        })
        
        posts_div.innerHTML = html
        elementosCarregarAnexos.map(elementoCarregarAnexos =>{
            const elementoEmHtml = document.getElementById(elementoCarregarAnexos)

            console.log(elementoCarregarAnexos)
            carregarAnexos(elementoEmHtml)
        })
}
infosQuant[0].querySelectorAll('span')[1].innerText = qtd


})