const tema = document.getElementById('select_tema');




if(localStorage.getItem('fonte') != undefined){
    document.documentElement.style.setProperty('--light-bg', localStorage.getItem('fundo'));
    document.documentElement.style.setProperty('--dark-font', localStorage.getItem('fonte'));
    document.documentElement.style.setProperty('--bg-boxes-dash', localStorage.getItem('bg-dash'));
    document.documentElement.style.setProperty('--border-dash', localStorage.getItem('border-dash'))
}

const url = (window.location.href).split('/');
if(url[url.length -1] == 'configuracoes'){

tema.addEventListener('change', () =>{
    
    if(tema.value == '0'){
    document.documentElement.style.setProperty('--light-bg', '#fff');
    
    document.documentElement.style.setProperty('--bg-boxes-dash', '#DBE3EF')
    document.documentElement.style.setProperty('--border-dash', 'none')
    document.documentElement.style.setProperty('--dark-font', '#000');
    localStorage.setItem('bg-dash', '#DBE3EF')
    localStorage.setItem('border-dash', 'none')
    localStorage.setItem('fonte', '#000');
    localStorage.setItem('fundo', '#fff');

    }else {
        
            document.documentElement.style.setProperty('--light-bg', '#0E0505');
            document.documentElement.style.setProperty('--bg-boxes-dash', 'transparent')
            document.documentElement.style.setProperty('--border-dash', '1px solid var(--primary-color)')
            document.documentElement.style.setProperty('--dark-font', '#fff'); 
            localStorage.setItem('bg-dash', 'transparent')
            localStorage.setItem('border-dash', '1px solid var(--primary-color)')
            localStorage.setItem('fonte', '#fff')
            localStorage.setItem('fundo', '#0E0505');
        
    }
})
}else if(url == "dashboard"){

}