const modalList = document.getElementById('modal_list');

const closeList = () =>{
    modalList.style.display = 'none'
    limitNotif = 10;
}

const openList = () => {
    modalList.style.display ='flex';
    getNotificacoes()
}