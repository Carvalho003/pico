let limitSearch = 10;

const modalPesquisa = document.getElementById('modal_search');


const mostrarMais = () => {
    limitSearch += 10;
    search()
}


const closeSearch = () => {
    modalPesquisa.style.display = 'none'
}

const openSearch = () => {
    modalPesquisa.style.display = 'flex';
}


const search = async() => {
    const search = ipt_search.value;
    const listSearch = document.getElementById('list-search')
    if(search == "" || search == " "){
        span_info_search.innerText = "Pesquise um usuário...";
        listSearch.innerHTML = '';
        limitSearch = 10;
    }
    console.log(user.id)
    const data = {
        search: search,
        limit: limitSearch
    }
    await fetch(`http://localhost:3333/api/users/${user.id}/search`,{
        method: 'POST' 
        ,body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        console.log(data)
        
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
                        message += `<button onclick="seguir(${dados.id})" style="width:90px !important" class="btn-seguir">Seguir</button>`
                        }else{
                            message += `<button onclick="unfollow(${dados.id})" style="width:90px !important" class="btn-seguir btn-seguindo">Seguindo</button>`
                        }

                        message += `<button onclick="perfil(${dados.id})" style="" class="btn-seguir">Perfil</button>
                        </div>
                        </div>`;
                }
                })
                span_info_search.innerText = ""
                span_mostrar_mais.innerText = 'Mostrar mais...'
                
                
    }else{
        console.log(data.error)
        message = `<span class="text-danger">${data.message}</span>`
        span_info_search.innerText = "";
    }
    listSearch.innerHTML = message;
    })
    console.log(search);
}

const seguir = async (id) => {
    const seguido_id = id;
    const seguidor_id = user.id;
    console.log(seguidor_id)
    console.log(seguido_id);
    const data = {
        
        seguidor_id: seguidor_id
    }
    console.log(JSON.stringify(data))
    console.log(seguidor_id)
    await fetch(`http://localhost:3333/api/seguidores/${seguido_id}/seguir`, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then((data) => {
        console.log(data)
        search()
    })
}

const unfollow = async(id) => {
    const seguido_id = id;
    const seguidor_id = user.id;

    const data = {
        
        seguidor_id: seguidor_id
    }
    
    
    await fetch(`http://localhost:3333/api/seguidores/${seguido_id}/unfollow`, {
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(() => {
        search()
    })
}

const perfil = id =>{
    window.location.href = `/perfil/${id}`;
}