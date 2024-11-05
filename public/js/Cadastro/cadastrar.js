



const cadastrar = async () => {
    const form = document.getElementById('form_cadastro');
    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    } ) 


    //validations
    
    
    const infosData = validarDataNasc(data['dtNasc']);

    

    

    if(validarNome(data['nome']) && validarEmail(data['email']) && infosData[0] && validarSenha(data['password']) && validarSenhas(data['password'], data['confirmacao'])){
        
        data['dtNasc'] = infosData[1];

        try{
            const response2 = await fetch('http://localhost:3001/api/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }).then(response => response.json())
            .then(response => {
                console.log(response.message
                );
                span_erro.innerText = response.message;
            });
            
        }catch(e){
            console.log(e)
        }
 
    }else {
        span_erro.innerText = "Dados inválidos!"
    }

    

    //fetch

    const response = await fetch('http://localhost:3001/api/users');

    console.log(await response.json())

    
    // console.log(data.get('dtNasc'));
    // console.log(data);
}

const validarNome = nome => {
    let letraMaiuscula = nome != nome.toLowerCase();
    
    let nomeComposto = (nome.split(' ').length) > 1;
    
    if(letraMaiuscula && nomeComposto){
        return true;
    }

    return false;


}

const validarEmail = email => {
    let temArroba = email.indexOf('@');

    console.log(email.indexOf('.com'))
    let termino = false
    if((email.indexOf('.com') != -1 && email.indexOf('.com') > temArroba) || (email.indexOf('.br') != -1 && email.indexOf('.br') > temArroba)){
        termino = true;
    }
    let temEspaco = email.includes(' ');

    if(temArroba && termino && !temEspaco){
        return true
    }
    return false;

}

const validarDataNasc = dtNasc =>{
    let dataNasc = dtNasc.split('/');
    dataNasc = dataNasc[2] + '-' + dataNasc[1] + '-' + dataNasc[0];

    let date = new Date(dataNasc);
    let ans = (date instanceof Date) && !isNaN(date);
    console.log(ans)
    return [ans, dataNasc];

}

const validarSenha = senha => {
    const CARACTERES_ESPECIAIS = /[^A-Za-z0-9]/;

    let caracteresEspeciais = CARACTERES_ESPECIAIS.test(senha);
    let letraMaiuscula = senha != senha.toLowerCase();
    let letraMinuscula = senha != senha.toUpperCase();
    let numeros = false;
    for(let i =0;i< senha.length; i++){
        if(Number(parseFloat(senha[i])) == senha[i]){
            numeros = true;
        }
    }

    if(caracteresEspeciais && letraMaiuscula && letraMinuscula && numeros){
        return true;
    }else{
        return false;
    }


}

const validarSenhas = (senha, confirmacao) =>{
    return senha == confirmacao;
}

