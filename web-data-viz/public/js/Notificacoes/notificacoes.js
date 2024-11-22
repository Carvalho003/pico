let limitnotif = 10;

const countNotificacoes = () => {
    console.log("contar")
    fetch(`http://localhost:3333/api/interacaos/notificacoes/${user.id}`).then(res => res.json()).then(res => {
        console.log(res)
        span_notif.innerHTML += ` <span style="color:var(--primary-color);font-weight:600">${res.notificacoes}</span>`
    })
}

const perfilIr = id =>{
    window.location.href = `http://localhost:3333/perfil/${id}`;
}

const carregarPublicacao =(postId) => {
    let url = (window.location.href).split("/")
    url = url[url.length -1];
    sessionStorage.POSTID = postId;

    
    window.location.href = "http://localhost:3333/feed";
    
}


const setInteracaoVisto = (idInteracao, postId) =>{
    fetch(`http://localhost:3333/api/interacaos/setVisto/${idInteracao}`, {
        method: 'PUT'
    }).then(res => res.json() ).then(res => {
        console.log(res)
        carregarPublicacao(postId)
    })
}

const setSeguirVisto = (idSeguidor) => {
    fetch(`http://localhost:3333/api/seguidores/setVisto/${idSeguidor}/${user.id}`, {
        method: 'PUT'
    }).then(res => res.json() ).then(res => {
        console.log(res)
        perfilIr(idSeguidor)
    })
}

const atualizarNotif = (id, tipo) =>{
    if(tipo == "interacao"){
        setInteracaoVisto(id)
    }else{
        setSeguirVisto(id)
    }
}

countNotificacoes()

const getNotificacoes = () => {
    fetch(`http://localhost:3333/api/interacaos/notificacoes/${user.id}/${limitnotif}`).then(res => res.json()).then(res => {
        console.log(res)
        fillNotif(res)
    })
}

const fillNotif = (data) => {
    let html = ``

    data.map(notificacao => {
        let tempo = notificacao.tempo 
        let userId = notificacao.user_id
        let frase = "";
        let funcao = "";
        let acao = notificacao.acao
        let userName = notificacao.userName
        
        if(acao == "seguiu"){
            funcao = `setSeguirVisto(${userId})`;
            frase = `${acao} você.`
        }else{
            frase = `${acao} seu post.`
            funcao = `setInteracaoVisto(${notificacao.id}, ${notificacao.post_id})`;
        }
        let styleMaior = ""
        let styleFoto = ``;
        let background ="";
        let destaque ="";
        if(notificacao.foto){
            background = `background-image: url('../uploads/${notificacao.foto}')`
        }
        if(!notificacao.visto){
            destaque = `color:var(--primary-color)`;
        }
        styleMaior = `style="${destaque}"`
        styleFoto = `style="${background}"`

        html += `<div  ${styleMaior} onclick="${funcao}" class="foto-infos a-center flex row">
                        <div ${styleFoto} class="foto-user"></div>
                        <div class="nome-tempo flex column">
                            <span>${userName} ${frase}</span>
                            <span class="text-fade">${tempo}.</span>
                        </div>
                    </div>`
    })

    html += `<div style="cursor:pointer" onclick="moreNotif()" class="mostrar">Mostrar mais...</div>`

    div_notif.innerHTML = html



}

const moreNotif = () => {
    limitnotif += 10;
    getNotificacoes();
}