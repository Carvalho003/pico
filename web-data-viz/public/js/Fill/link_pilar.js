let urlAtual = (window.location.href).split('/')
urlAtual = urlAtual[urlAtual.length -1];
if(Number(urlAtual) == NaN ){
document.querySelector('.logo-nav').addEventListener('click', () => {
    window.location.href = '../'
})
}else{
    document.querySelector('.logo-nav').addEventListener('click', () => {
        window.location.href = '../../'
    })
}