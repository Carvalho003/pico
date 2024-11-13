const editarPerfil = (element) => {
    if(element){
    element.onclick = () => disableEditarPerfil(element);
    }
    document.getElementById('ipt_foto').style.display = 'flex'
    document.getElementById('ipt_foto_capa').style.display = 'flex'
    document.getElementById('editar_capa').style.display = 'flex'
    document.getElementById('editar_perfil').style.display = 'flex'

}

const disableEditarPerfil = (element) => {
    if(element){
    element.onclick = () => editarPerfil(element);
    }
    document.getElementById('ipt_foto').style.display = 'none'
    document.getElementById('ipt_foto_capa').style.display = 'none'
    document.getElementById('editar_capa').style.display = 'none'
    document.getElementById('editar_perfil').style.display = 'none'
}

const abrirFoto = () =>{
    crop_space.style.display = 'flex';
    crop_space.style.position= 'fixed';
}