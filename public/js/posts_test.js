const  carregarAnexos = (element) => {
    if(element != null){
    const espacos = element.querySelectorAll('.foto-post');

    if(espacos){
    console.log(espacos)
    console.log('afs')
    let tamanhoFor = espacos.length

    if(espacos.length == 1){
        espacos[0].style.width = "100%"
    }else{

    if(tamanhoFor >=4){
        espacos[3].innerHTML = `<div id="div-numero" class=" flex center maisNumero-div"><span id="maisFotos" class='fs-m text-white maisNumero'>+${espacos.length - 3}</span></div>`
        tamanhoFor = 4;
    }
    //forTirarORestante
    let postsSemRenderizar = (espacos.length - 4) + 4;
    for(var i = 4; i < postsSemRenderizar; i++){
        espacos[i].style.display = 'none';
        espacos[3].classList.add('foto-a-mais') 
    }

    //carregamento
    for (var i =0; i < tamanhoFor; i++){
        console.log('aa')
        espacos[i].style.backgroundImage = `url('../img/${i+1}.jpg')`;
    }
    }
}
    }
}