const modalSearch = document.getElementById('modal_search_seg');
let limit = 10;
const listSearch = document.getElementById('list-search')
let search = ""
const inputSearch = document.getElementById('ipt_search');
let optionAtual = "";
inputSearch.oninput = () => {
    search = inputSearch.value;
    console.log(search)
    console.log(optionAtual)
    openSearch(optionAtual)
}



let userId = (window.location.href).split('/')
userId = userId[userId.length -1];

const logadoId = user.id

const mostrarMais = (option) => {
    limit += 10;
    let data = {
        search: search,
        limit: limit
    }
    if(option == "seguindo"){
        optionAtual = "seguindo"
        getSeguindo(data)
    }else{
        optionAtual = "seguidores";
        getSeguidores(data)
    }
}


const openSearch = option => {
    console.log(option)
    modalSearch.style.display = 'flex';
    console.log(option)
    let data = {
        search: search,
        limit: limit
    }
    if(option == "seguindo"){
        optionAtual = "seguindo"
        getSeguindo(data)
        
    }else{
        optionAtual = "seguidores";
        getSeguidores(data)
    }
}


const fillListSearch = (data, option) => {
    let message = '';
    if(!data.message){
        
        
        data.map(dados =>{

            if(user.id != dados.id){
                message += `<div class="foto-infos a-center flex row between w-100">
                <div class="flex row a-center" style="gap:10px">
                    <div class="foto-user"></div>
                    <div class="nome-tempo flex column">
                    <span>${dados.userName}</span>
                    </div>
                    </div>
                    <div class="flex a-center" style="gap:10px">`
                    if(dados.Segue != "Segue"){
                    message += `<button onclick="seguir(${dados.id}, '${option}')" style="width:90px !important" class="btn-seguir">Seguir</button>`
                    }else{
                        message += `<button onclick="unfollow(${dados.id}, '${option}')" style="width:90px !important" class="btn-seguir btn-seguindo">Seguindo</button>`
                    }

                    message += `<button onclick="perfil(${dados.id})" style="" class="btn-seguir">Perfil</button>
                    </div>
                    </div>`;
            }
            })
            span_info_search.innerText = ""
            span_mostrar_mais.innerText = 'Mostrar mais...'
            span_mostrar_mais.onclick = () =>  mostrarMais(option)
            
            
}else{
    console.log(data.error)
    message = `<span class="text-danger">${data.message}</span>`
    span_info_search.innerText = "";
}
listSearch.innerHTML = message;

}

const closeSearch = () => {
    modalSearch.style.display = 'none'
    limit = 10;
}


const getSeguindo = (data) => {
    console.log(data)
    fetch(`/api/seguidores/seguindo/${userId}/${logadoId}`, {
        method: 'POST', 
        body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
    }).then(res => res.json()).then(res => {
        fillListSearch(res, "seguindo")
    }).catch(e => {
        console.log(e)
    })
}

const getSeguidores = (data) => {
    fetch(`/api/seguidores/seguidores/${userId}/${logadoId}`, {
        method: 'POST', 
        body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
    }).then(res => res.json()).then(data => {
        console.log(data)
       fillListSearch(data, "seguidores")


    }).catch(e => {
        console.log(e)
    })
}

