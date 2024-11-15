let post_compartilhado

const publish = () => {
    const desc_post = document.getElementById('desc_post_create');
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
        
        
        carregarPosts()
        fecharPub()


    })

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