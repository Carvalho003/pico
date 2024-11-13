const publish = () => {
    const desc_post = document.getElementById('desc_post_create');

    const data = {
        descricao: desc_post.value
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