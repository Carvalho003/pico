const urlPerfil = (window.location.href).split('/')

const infosQuant = document.querySelectorAll('.info-quant')

const id = urlPerfil[urlPerfil.length - 1];

let contador = 0;


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
        fotoCapa.style.backgroundImage = `url('../uploads/${data.fotoCapa}'`;
    }
    nomeEUserName[0].innerText = data.nome
    nomeEUserName[1].innerText = data.userName
    if(data.foto != null){
        document.querySelector('.foto-perfil').style.backgroundImage = `url('../uploads/${data.foto}')`;
    }
    if(data.id != user.id){
        
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

const carregarPosts = () =>{

fetch(`http://localhost:3333/api/posts/perfil/${id}/${user.id}`, {
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
        data.map(async (publicacao) => {
            html += `<div class="post post-perfil flex column">
                    <div class="infos-user-post between a-center flex row">
                        <div class="group-foto-nome-post a-center flex row">
                            <div` 
                            if(publicacao.foto){
                            html += ` style="background-image: url('../uploads/${publicacao.foto}')" `
                            }
                            html += ` class="foto-user-post"></div>
                            <div onclick="perfil(${publicacao.id})" class="name-time flex column">
                                <span id="nome_user">${publicacao.nome}</span>
                                <span id="tempo" class="text-fade">${publicacao.tempo}</span>
                            </div>
                        </div>
                        <div class="relative" onclick="abrirOpcoesPublicacao(this)">
                        <div class="absolute menu-pub ">
                            <ul>
                                <li>
                                    <a href="http://localhost:3333/perfil/${publicacao.id}"><p>Ver Perfil de ${(publicacao.nome).split(" ")[0]}...</p></a>
                                </li>
                                <li>
                                    <a href="">Compartilhar</a>
                                </li>
                            </ul>
                        </div>
                    <i onclick="abrirOpcoes()" class='bx bx-dots-vertical-rounded'></i>
                    </div>
                    </div>
                    <div id="post_content${publicacao.postId}" class="post-content flex column a-start">
                        <p id="desc_post">${publicacao.descricao}</p>`
                        if(publicacao.anexos != 'SEM ANEXO'){
                        
                            html += `<div id="carregar${publicacao.postId}${contador}" onclick="carregarAnexos(this)" class="anexos_post">`
                            publicacao.anexos.map(anexo => {
                                
                                html += `<div style="background-image : url('../uploads/anexos/${anexo.anexo}')" class="foto-post"></div>`

                                })
                            
                            html += `</div>`

                             elementosCarregarAnexos.push(`carregar${publicacao.postId}${contador}`)
                            
                                contador++;
                            
                       
                        }else if(publicacao.compartilhamento != null){
                            let pub_compartilhada = publicacao.pub_compartilhada
                            html += `<div class="post w-100 post-perfil flex column">
                            <div class="infos-user-post between a-center flex row">
                                <div class="group-foto-nome-post a-center flex row">
                                    <div` 
                                    if(pub_compartilhada.foto){
                                    html += ` style="background-image: url('../uploads/${pub_compartilhada.foto}')" `
                                    }
                                    html += ` class="foto-user-post"></div>
                                    <div onclick="perfil(${pub_compartilhada.id})" class="name-time flex column">
                                        <span id="nome_user">${pub_compartilhada.nome}</span>
                                        <span id="tempo" class="text-fade">${pub_compartilhada.tempo}</span>
                                    </div>
                                </div>
                                <div class="relative" onclick="abrirOpcoesPublicacao(this)">
                                <div class="absolute menu-pub ">
                                    <ul>
                                        <li>
                                            <a href="http://localhost:3333/perfil/${pub_compartilhada.id}"><p>Ver Perfil de ${(publicacao.nome).split(" ")[0]}...</p></a>
                                        </li>
                                        <li>
                                            <a href="">Compartilhar</a>
                                        </li>
                                    </ul>
                                </div>
                            <i onclick="abrirOpcoes()" class='bx bx-dots-vertical-rounded'></i>
                            </div>
                            </div>
                            <div id="post_content${pub_compartilhada.id}" class="post-content flex column a-start">
                                <p id="desc_post">${pub_compartilhada.descricao}</p>`
                                if(pub_compartilhada.anexos != 'SEM ANEXO'){
                                
                                    html += `<div id="carregar${pub_compartilhada.postId}${contador}" onclick="carregarAnexos(this)" class="anexos_post">`
                                    pub_compartilhada.anexos.map(anexo => {
                                        
                                        html += `<div style="background-image:url('../uploads/anexos/${anexo.anexo}')" class="foto-post"></div>`
        
                                        })
                                    
                                    html += `</div>`
        
                                     elementosCarregarAnexos.push(`carregar${pub_compartilhada.postId}${contador}`)
                                    contador++
        
                                    
                                    }
                                
                                console.log("vsh pq n vai")
                                
                            html += `</div>
                            <div class="post_interaction flex row a-center">
                                <div class="group-interaction-icon a-center flex row">`
                                if(pub_compartilhada.likou > 0){
                                    html += `<i onclick="likeDeslike(${pub_compartilhada.postId}, this)" class='bx bxs-like  text-primary' ></i>`
                                }else{
                                    html += `<i onclick="likeDeslike(${pub_compartilhada.postId}, this)" class='bx bxs-like  text-fade' ></i>`
                                }
                                    html += `<span>${pub_compartilhada.likes}</span>
                                </div>
                                <div onclick="showComents(this, ${pub_compartilhada.postId})" class="group-interaction-icon a-center flex row">
                                    <i class='bx bx-comment-dots text-fade'></i>
                                    <span>Comentar</span>
                                </div>
        
                                <div onclick="share(this)" class="group-interaction-icon a-center flex row">
                                    <i class='bx bx-share text-fade' ></i>
                                    <span>Compartilhar</span>
                                </div>
                            </div>
        
                            <div style="display:none" class="post-coments  w-100 flex column a-start">
                            <span>Comentários</span>
                            
                           
                            <span>Carregar mais...</span>
                            <div class="flex column w-100">
                                <span>Comentar:</span>
                                <textarea class="w-100" name="" placeholder="Comentar.." id="textarea-comentario"></textarea>
                                <button onclick="storeComentario(${pub_compartilhada.postId}, this)" id="button-comentario">Comentar</button>
                            </div>
                        </div>
        
                        </div>`
                            
                        }
                        console.log("vsh pq n vai")
                        
                    html += `</div>
                    <div class="post_interaction flex row a-center">
                        <div class="group-interaction-icon a-center flex row">`
                        if(publicacao.likou > 0){
                            html += `<i onclick="likeDeslike(${publicacao.postId}, this)" class='bx bxs-like  text-primary' ></i>`
                        }else{
                            html += `<i onclick="likeDeslike(${publicacao.postId}, this)" class='bx bxs-like  text-fade' ></i>`
                        }
                            html += `<span>${publicacao.likes}</span>
                        </div>
                        <div onclick="showComents(this, ${publicacao.postId})" class="group-interaction-icon a-center flex row">
                            <i class='bx bx-comment-dots text-fade'></i>
                            <span>Comentar</span>
                        </div>`
                        if(publicacao.compartilhamento == null){
                        html+= ` <div onclick="share(this)" class="group-interaction-icon a-center flex row">
                            <i class='bx bx-share text-fade' ></i>
                            <span>Compartilhar</span>
                        </div>`
                        }
                    html+= `</div>

                    <div style="display:none" class="post-coments  w-100 flex column a-start">
                    <span>Comentários</span>
                    
                   
                    <span>Carregar mais...</span>
                    <div class="flex column w-100">
                        <span>Comentar:</span>
                        <textarea class="w-100" name="" placeholder="Comentar.." id="textarea-comentario"></textarea>
                        <button onclick="storeComentario(${publicacao.postId}, this)" id="button-comentario">Comentar</button>
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
}

carregarPosts()