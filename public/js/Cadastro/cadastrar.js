



const cadastrar = async () => {
    const form = document.getElementById('form_cadastro');
    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    } ) 


    //validations
    console.log(data)
    console.log(data['nome']);
    console.log(validarNome(data['nome']));
    console.log(validarEmail(data['email']));


    //fetch

    const response = await fetch('http://localhost:3001/api/users');

    console.log(await response.json())

    // try{
    //     const response2 = await fetch('http://localhost:3001/api/users', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
            
    //     }).then(response => {
    //         console.log(response.message
    //         );
    //     });
    //     console.log(response2)
    // }catch(e){
    //     console.log(e)
    // }
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
    let termino = false
    if(email.indexOf('.com') != -1 || email.indexOf('.br') != -1){
        termino = temArroba < termino;
    }
    let temEspaco = email.includes(' ');

    if(temArroba && termino && temEspaco){
        return true
    }
    return false;

}

