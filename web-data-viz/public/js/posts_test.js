const expandida = document.getElementById('div_expandida');


const closeExpandida = () => {
    expandida.style.display = 'none'
}

const wrapper_expand = document.getElementById('wrapper_expand')
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
        console.log("temm")
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
        
    }
    }
}
    }

    element.onclick = () => expandir(element)
}

const expandir = element => {
    wrapper_expand.innerHTML = "";
    console.log(element)
    const posts = element.querySelectorAll('.foto-post');
    console.log(posts)
    for(let i =0; i < posts.length; i ++){
        let url = posts[i].style.backgroundImage;

        url = url.replaceAll("url(", "");
        url = url.replaceAll(")", "")
        url = url.replaceAll('"', "");
        url = url.split("/")
        url = url[url.length -1]; 
        wrapper_expand.innerHTML += `<div style="height:80vh;display:flex !important; width:100%;padding:20px !important" class="swiper-slide  flex jf-center a-center"><img style="max-width:60vw; min-width:30vw" src="../uploads/anexos/${url}" /></div>`
        
        
        var swiperExpand = new Swiper(".expand", {
            slidesPerView: 1,
            spaceBetween: 30,
            
              navigation: {
                nextEl: ".next-expand",
                prevEl: ".prev-expand",
              },
            
        });
        expandida.style.display = 'flex'
    }
    
}


