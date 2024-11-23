
document.addEventListener('DOMContentLoaded', function() {


    //PEGANDO PELO NOME DO ID CADA SESSÃO QUE VOU PEDIR PARA OBSERVAR
let pilarSection = document.getElementById('pilar');

let historiaSection = document.getElementById('historia');

let filosofiaSection = document.getElementById('filosofia');

let valoresSection = document.getElementById('valores');







//PREPARANDO O OBJETO OBSERVADOR, PASSANDO QUE TERÁ ENTRADAS PARA ELE, E O PROPRIO OBJETO PARA ELE USAR
//COMO REFERENCIA
//DENTRO DELE TAMBÉM PRECISA DE UMA FUNÇÃO QUE SERÁ ATIVADA SEMPRE ENQUANTO ELE ESTIVER OBERVANDO
const trocarActive = new IntersectionObserver((entradas, trocarActive) => {
    entradas.forEach((entrada) =>{
        //MEU ALVO ESTA NA TELA?
        if(entrada.isIntersecting){
            //QUAL O ID DO MEU ALVO?
            if(entrada.target.id == 'pilar'){
                
                changeSection(0)
                //CHAMANDO FUNÇÃO PARA TROCAR O ITEM ATIVO NA NAV BAR
            }else if(entrada.target.id == 'historia'){
                changeSection(1)
            }else if(entrada.target.id == 'filosofia'){
                changeSection(2)
            }else if (entrada.target.id == 'valores'){
                changeSection(3)
            }
        }
    })
})

//MANDANDO MEU OBSERVADOR OBSERVAR TODAS AS SEÇÕES ABAIXO
trocarActive.observe(pilarSection);
trocarActive.observe(filosofiaSection);
trocarActive.observe(historiaSection);
trocarActive.observe(valoresSection);

});



