const likeDeslike = (postId, element) => {
    fetch(`/api/interacaos/like/${user.id}/${postId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        const spanQtd = element.nextElementSibling;

        if(res.message == "Deslike"){
            element.classList.remove("text-primary")
            element.classList.add("text-fade")
            spanQtd.innerText = Number(spanQtd.innerText) - 1
        }else{
            element.classList.add("text-primary")
            element.classList.remove("text-fade")
            spanQtd.innerText = Number(spanQtd.innerText) + 1

        }

    })
}

const storeComentario = (postId, descricao) => {
    const textArea = descricao.previousElementSibling
    const data = {
        descricao: textArea.value
    }

    fetch(`http://localhost:3333/api/interacaos/comentario/${user.id}/${postId}`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        console.log(res)
        const paiDoText = textArea.parentElement;
        const comentsDiv = paiDoText.parentElement;
        const ultimoIrmaoDoComents = comentsDiv.previousElementSibling;
        const ultimoElementoFilho = ultimoIrmaoDoComents.lastElementChild;
        showComents(ultimoElementoFilho, postId)
    }).catch(e => {
        console.log(e)
    })
}

const showComents = (element, postId) =>{
    const paiDoElemento = element.parentElement;
    console.log(postId)
    const divComentarios = paiDoElemento.nextElementSibling;

    fetch(`http://localhost:3333/api/interacaos/comentario/${postId}`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        console.log(res)
        let html = `<span>Comentários</span>`
        res.map(comentario => {
             html += `<div class="comentario w-100 a-start flex row">`
                        if(comentario.foto){
                            html += `<div style="background-image: url('../uploads/${comentario.foto}')" class="foto-user"></div>`
                        }else{
                            html += `<div class="foto-user"></div>`

                        }
                        

                        html += `<div class="nome-desc flex column">
                            <span>${comentario.nome}</span>
                            <p>${comentario.descricao}</p>
                        </div>
                    </div>`
        })

        html += `  <span>Carregar mais...</span>
                    <div class="flex column w-100">
                        <span>Comentar:</span>
                        <textarea class="w-100" name="" placeholder="Comentar.." id="textarea-comentario"></textarea>
                        <button onclick="storeComentario(${postId}, this)" id="button-comentario">Comentar</button>
                    </div>`

            divComentarios.innerHTML = html;
    }).catch(e => {
        console.log(e)
    })

    divComentarios.style.display = 'flex';
}