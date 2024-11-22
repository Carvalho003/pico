const nomeInput = document.getElementById('nome_user_ipt');
const userNameInput = document.getElementById('userName_ipt');
const grupoIcones = document.getElementById('grupo_icones');
const spanUserName = document.getElementById('span_userName');
const spanNome = document.getElementById('nome_user');
const spanDtNasc = document.getElementById('span_dtNasc');
const spanCreatedAt = document.getElementById('span_created_at');

const modal_editar = document.getElementById('backdrop-username');

let editando = "";

const modalDeErro = document.getElementById('backdrop-erro');

const tituloDoErro = document.getElementById('span_campo_alterar_erro');

const closeModalEditar = () => {
    modal_editar.style.display = 'none'
}

const setEmail = (email) => {
    const data = {
        email: email
    }

    fetch(`http://localhost:3333/api/users/${user.id}/email`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(res => res.json()).then(res => {
        console.log(res)
        if(res.message){
            modalDeErro.style.display = "flex";
            tituloDoErro.innerText = res.message;        
        }
        atualizarDadosNaSession()
    })
}


const setSenha = (senha) => {
    const data = {
        senha: senha
    }

    fetch(`http://localhost:3333/api/users/${user.id}/senha`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(res => res.json()).then(res => {
        console.log(res)
        if(res.message){
            modalDeErro.style.display = "flex";
            tituloDoErro.innerText = res.message;        
        }else{
        modalDeErro.style.display = "flex";
            tituloDoErro.innerText = "Senha alterada com sucesso.";        
        }
        atualizarDadosNaSession()
    })
}

const editarComModal = () => {

    var campo = ipt_campo_modal.value;

    if(editando == "email"){
        console.log("email")
        if(validarEmail(campo)){
            setEmail(campo)
            closeModalEditar()
            ipt_campo_modal.value = "";

        }else{
            modalDeErro.style.display = "flex";
            tituloDoErro.innerText = "Email inválido, o email deve conter @ e terminar com dominios como .com ou .br";        
        }
    }else{
        if(validarSenha(campo)){
            setSenha(campo)
            closeModalEditar()
            ipt_campo_modal.value = "";
        }else{
            modalDeErro.style.display = "flex";
            tituloDoErro.innerText = "Senha inválida, a senha não pode contar caracteres especiais como @, #, & etc. Deve conter números, letra maiúscula, miniscúla e números.";        
        }
    }
    
}

const openModalEditar = (type) => {
    if(type == "email"){
        span_campo_alterar.innerText = "Digite seu novo email"
        
    }else{
        span_campo_alterar.innerText = "Digite sua nova senha"
    }

    editando = type

    modal_editar.style.display = "flex";
}


const fillDate = (date) => {
    date = date.toString();
    if(date.length == 1){
        return "0" + date
    }
    return date
}

const atualizarDadosNaSession = () => {
const id = user.id
fetch(`http://localhost:3333/api/users/${id}/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}).then(res => res.json()).then(data => {
    console.log(data)
    const stringUser = JSON.stringify(data)
            
    sessionStorage.setItem('user', stringUser);
    spanNome.innerText = data.nome;
    spanUserName.innerText = data.userName;
    let dataNascimento = new Date(data.dtNasc);
    dataNascimento = fillDate(dataNascimento.getDate()) + "/" + fillDate(dataNascimento.getMonth()) + "/" + dataNascimento.getFullYear();
    spanDtNasc.innerText = dataNascimento


    let dataIngresso = new Date(data.created_at);
    dataIngresso = fillDate(dataIngresso.getDate()) + "/" + fillDate(dataIngresso.getMonth()) + "/" + dataIngresso.getFullYear();
    span_created_at.innerText = dataIngresso
    span_email.innerText = data.email

})
}

atualizarDadosNaSession()

let buttonEditar;

grupoIcones.style.display = "none"

nomeInput.style.display = "none";
userNameInput.style.display = "none";

const fecharModalErro = () => {
    modalDeErro.style.display = 'none'
}

const ativarEdicao = (element) => {
    buttonEditar = element;
    element.style.display = 'none';
    grupoIcones.style.display = "flex"
    
    nomeInput.value = spanNome.innerText
    userNameInput.value = (spanUserName.innerText).replaceAll("@", "");
    spanNome.style.display = 'none';
    spanUserName.style.display = 'none';
    nomeInput.style.display = 'flex'
    userNameInput.style.display = 'flex'


}

const setNome = (nome) => {
    const data = {
        nome: nome
    }

    fetch(`http://localhost:3333/api/users/${user.id}/nome`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(res => res.json()).then(res => {
        console.log(res)
        atualizarDadosNaSession()
    })
}


const editar = () => {
    let nome = nomeInput.value
    let userName = userNameInput.value;
    
    if(validarNome(nome)){
        mensagem = "User name inválido"

        
        if(validateUserName(userName)){
            setUserName().then(data => {
                if(data.message && data.message == "UserName atualizado"){
                    atualizarDadosNaSession()
                    desativarEdicao()
                }else{
                    modalDeErro.style.display = "flex";
            tituloDoErro.innerText = "Username inválido, o username já esta sendo utilizado";        
                }
            }) 
            setNome(nome).then(() => {
                atualizarDadosNaSession();
                desativarEdicao();
            })

        }else{
            modalDeErro.style.display = "flex";
            tituloDoErro.innerText = "Username inválido, o username não pode ter espaços ou caracteres especiais";
        }
    }else{
        let mensagem = "Nome inválido";
        modalDeErro.style.display = "flex";

        tituloDoErro.innerText = "Nome inválido";
    }
}

const desativarEdicao = () => {
    buttonEditar.style.display = 'flex';
    grupoIcones.style.display = "none";

    

    nomeInput.value = ""
    userNameInput.value = "";

    spanNome.style.display = 'flex';
    spanUserName.style.display = 'flex';

    nomeInput.style.display = 'none'
    userNameInput.style.display = 'none'


}