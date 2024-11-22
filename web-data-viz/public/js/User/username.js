
const setUserName = async () => {
    let url = window.location.href;
            url = url.split("/");
            url = url[url.length -1];
    let userNameDigitado;            
    if(url != "configuracoes"){        
         userNameDigitado = document.getElementById('ipt_userName').value 
    }else{
         userNameDigitado = userNameInput.value
    }
    if(validateUserName(userNameDigitado)){
        const userId = user.id;


        const data = {
            userName: userNameDigitado
        }
        return fetch(`http://localhost:3333/api/users/${userId}/username`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data =>{
            console.log(data)
            if(url != "configuracoes"){
            if(data.message && data.message == "UserName atualizado"){
                addUserName(data.userName);
                reFill();
                modalUsername.style.display = 'none';
            }else{
                
                span_erro_username.innerText = data.message;
            }
            }else{
                return data;
            }
        })

    }else{
        console.log('nao valido')
    }

}

const validateUserName = userName => {
    let temEspaco = userName.includes(' ');

    let especiais = ['@', '#', '$', '%', '&', '*', '(', ')'];

    let temEspeciais = especiais.some(char => userName.includes(char));


    if(temEspeciais || temEspaco){
        return false;
    }

    return true;

}

const addUserName = async userName =>{
    user['userName'] = userName;
    sessionStorage.setItem('user', JSON.stringify(user));
}