const carregarPosts =() => {

fetch(`http://localhost:3333/api/posts/seguindo/${user.id}`, {
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
                    <div class="post-content flex column a-start">
                        <p id="desc_post">${publicacao.descricao}</p>`
                        if(publicacao.anexos != 'SEM ANEXO'){
                        
                            html += `<div id="carregar${publicacao.postId}" onclick="carregarAnexos(this)" class="anexos_post">`
                            publicacao.anexos.map(anexo => {
                            
                                html += `<div class="foto-post"></div>`

                                })
                            
                            html += `</div>`

                             elementosCarregarAnexos.push(`carregar${publicacao.postId}`)
                            

                            
                       
                        }
                        
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
                        </div>

                        <div class="group-interaction-icon a-center flex row">
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
                        <button onclick="storeComentario(${publicacao.postId}, this)" id="button-comentario">Comentar</button>
                    </div>
                </div>

                </div>`
        })
        
        area_posts.innerHTML = html
        elementosCarregarAnexos.map(elementoCarregarAnexos =>{
            const elementoEmHtml = document.getElementById(elementoCarregarAnexos)

            console.log(elementoCarregarAnexos)
            carregarAnexos(elementoEmHtml)
        })
}



})
}

carregarPosts()