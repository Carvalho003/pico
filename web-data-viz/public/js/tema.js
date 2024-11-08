const tema = document.getElementById('select_tema');


if(localStorage.getItem('fonte') != undefined){
    document.documentElement.style.setProperty('--light-bg', localStorage.getItem('fundo'));
    document.documentElement.style.setProperty('--dark-font', localStorage.getItem('fonte'));
}

const url = (window.location.href).split('/');
if(url[url.length -1] == 'configuracoes'){

tema.addEventListener('change', () =>{
    
    if(tema.value == '0'){
    document.documentElement.style.setProperty('--light-bg', '#fff');
    
    document.documentElement.style.setProperty('--dark-font', '#000');

    localStorage.setItem('fonte', '#000');
    localStorage.setItem('fundo', '#fff');

    }else {
        
            document.documentElement.style.setProperty('--light-bg', '#0E0505');

            document.documentElement.style.setProperty('--dark-font', '#fff'); 

            localStorage.setItem('fonte', '#fff')
            localStorage.setItem('fundo', '#0E0505');
        
    }
})
}