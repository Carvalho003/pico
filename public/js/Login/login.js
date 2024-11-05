const login = async () => {
    const email = ipt_email.value;
    const password = ipt_password.value;

    const data = {
        email: email,
        password: password
    };

    await fetch('http://localhost:3001/api/users/authenticate', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        
        if(data.message == undefined){
            const stringUser = JSON.stringify(data)
            
            sessionStorage.setItem('user', stringUser);
            window.location.href = '/feed'
        }else {
            
            console.log(span_erro)
            span_erro.innerText = data.message;
        }
    })


}