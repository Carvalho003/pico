const fillPhotos = () =>{
    const slides = document.querySelector('.lugares-carrossel').querySelector('.swiper-wrapper').querySelectorAll('.swiper-slide');
    
    const slidesComunidade = document.querySelector('.comunidade-carrossel').querySelector('.swiper-wrapper').querySelectorAll('.swiper-slide');

    const slidesArte = document.querySelector('.arte-carrossel').querySelector('.swiper-wrapper').querySelectorAll('.swiper-slide');
    
    const slidesDiversao = document.querySelector('.diversao-carrossel').querySelector('.swiper-wrapper').querySelectorAll('.swiper-slide');
    for(var i =0; i< slides.length;i++){
        slides[i].style.backgroundImage = `url('./img/lugares/${i+1}-lugares.jpg')`;
    }
    
    for(var i=0; i < slidesComunidade.length;i++){
        
        slidesComunidade[i].style.backgroundImage = `url('./img/comunidade/${i+1}-com.jpg')`;
    }

    for(var i=0; i < slidesArte.length;i++){
        slidesArte[i].style.backgroundImage = `url('./img/arte/${i+1}-art.jpg')`;
    }

    for(var i=0; i < slidesDiversao.length;i++){
        if(i != 1){
        slidesDiversao[i].style.backgroundImage = `url('./img/diversao/${i+1}-div.jpg')`;
        }else{
            slidesDiversao[i].style.backgroundImage = `url('./img/diversao/${i+1}-div.gif')`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Sua função aqui
    fillPhotos()
});