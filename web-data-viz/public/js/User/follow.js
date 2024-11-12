const seguir = async (id, option) => {
    const seguido_id = id;
    console.log(option)
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
        if(option == "seguindo"){
            getSeguindo({
                search: "",
                limit:10
            })
        }else if (option == "seguidores"){
            getSeguidores({
                search:"", 
                limit
            })
        }else{
            search()
        }
    })
}

const unfollow = async(id, option) => {
    console.log(option)
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
        if(option == "seguindo"){
            getSeguindo({
                search: "",
                limit:10
            })
        }else if (option == "seguidores"){
            getSeguidores({
                search:"", 
                limit
            })
        }else{
            search()
        }
    })
}