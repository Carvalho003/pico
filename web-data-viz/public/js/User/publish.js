let post_compartilhado

const publish = () => {
    const desc_post = document.getElementById('desc_post_create');
    let insertedId;
    const data = {
        descricao: desc_post.value
    }
    if(post_compartilhado){
        return sharePost(data);
    }
    fetch(`http://localhost:3333/api/posts/${user.id}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
    }
    }).then(res => res.json()).then(res => {
        console.log(res);
        
        insertedId = res.insertId;
        carregarPosts()
        fecharPub()
        if(inputPost.files.length > 0){
            storeAnexo(insertedId)
        }
    


    })

    
}



const storeAnexo = (postId) => {
    const files = inputPost.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        formData.append('images[]', files[i], files[i].name);
    }

    try {
        fetch(`http://localhost:3333/api/anexos/${postId}`, {
            method: 'POST',
            body: formData,
        }).then(response => response.json()).then(response => {
            console.log(response)
        }).catch(e => {
            console.error(e)
        });

        
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

const sharePost = (data) => {
    fetch(`http://localhost:3333/api/posts/share/${post_compartilhado}/${user.id}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
    }
    }).then(res => res.json()).then(res => {
        console.log(res);
        
        
        carregarPosts()
        fecharPub()


    })

}


const share = element =>{
    console.log(element.parentElement)
    element.parentElement.parentElement.style.width ="100%"
    element.parentElement.parentElement.style.alignSelf ="center"
    let htmlElement = (element.parentElement.parentElement).cloneNode(true);
    console.log(htmlElement)
    createPub()
    preview_area_post.appendChild(htmlElement);
    div_arquivos_post.style.display = 'none'
    post_compartilhado = (htmlElement.querySelector(".post-content").id).split('post_content')[1] 
}