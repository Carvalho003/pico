const countUser = () => {
    fetch('http://localhost:3333/api/users/count').then(res => res.json()).then(res =>{
        console.log(res

        )
        total_usuarios.innerText = res.usuarios;
    })
}

const fillUsersComMaisPosts = (data) => {
    let html = ``
    data.map(user => {
        let id = user.id;
        let foto = user.foto 
        let posts = user.posts
        let userName = user.userName;

        let styleFoto = `style="cursor:pointer"`
        if(foto){
            styleFoto =`style="cursor:pointer;background-image:url('../uploads/${foto}')"`
        }

        html += `<div class="flex mais_posts column center">
                    <div onclick="perfil(${id})" id="foto_user_feed" ${styleFoto} class="foto_user foto-lg">
                                        
                    </div>
                    <span class="text-fade">${userName}</span>
                    <span class="">${posts}</span>
                    </div>`
    })
    div_mais_posts.innerHTML = html

}


const getUserComMaisPostagens = () => {
    fetch('http://localhost:3333/api/users/maisPostagens').then(res => res.json()).then(res =>{
        console.log(res

        )
        fillUsersComMaisPosts(res)
    })
}


const getUsuariosComMaisSeguidores = () => {
    fetch('http://localhost:3333/api/seguidores/users').then(res => res.json()).then(res =>{
        console.log(res

        )

        fillUsersSeguidores(res)
        
    })
}
let corDaFonte = '#000'
if(localStorage.fonte){
    corDaFonte = localStorage.getItem('fonte')
    console.log(corDaFonte)
}



function ultimosDiasSemanaPorIndice(diaAtualIndice) {
    const dias = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    if (diaAtualIndice < 0 || diaAtualIndice > 6) {
        throw new Error("O índice do dia deve estar entre 0 (domingo) e 6 (sábado).");
    }

    const ultimosDias = [];
    for (let i = 1; i <= 4; i++) {
        const indice = (diaAtualIndice - i + 7) % 7;
        ultimosDias.unshift(dias[indice]);
    }
    ultimosDias.push(dias[diaAtualIndice])
    return ultimosDias;
}

const fillMes = (mes) => {
    let meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV',
            'DEZ'
    ];

    return meses[mes-1];
}


const getPorcentagemSobUltimoMes = () => {
    fetch('http://localhost:3333/api/users/porcentagem').then(res => res.json()).then(res => {
        console.log(res) 
        span_aumento.innerText = res.porcentagem + "%"
    })
}

const fillUsersSeguidores = (data) => {
    let html = "";
    
    data.map(user => {
        let userName = user.userName;
        let foto = user.foto
        let id = user.id
        let date = user.date
        let seguidores = user.seguidores
        
        let imagem = ``;

    if(foto){
        imagem = `style="background-image: url('../uploads/${foto}');cursor:pointer"`
    }
        html += `<div class="flex usuarios-seg row  between  center">
        <div class="flex user-infos row center">
        <div ${imagem} style="cursor:pointer" onclick="perfil(${id})" id="foto_user_feed" class="foto_user">
            
        </div>
        <span id="user_name">${userName}</span>
        </div>
        <span class="data">${date}</span>
        <span>${seguidores}</span>
    </div>`
    })

    div_usuarios_seg.innerHTML = html

   
}

const getUsersHoje = () => {
    fetch('http://localhost:3333/api/users/hoje').then(res => res.json()).then(res => {
        console.log(res ) 
        span_novos_hoje.innerText = res.usuarios
    })
}

const getMesComMaisUsuariosCadastrados = () => {
    fetch('http://localhost:3333/api/users/mes').then(res => res.json()).then(res => {
        console.log(res) 
        let mes = fillMes((res.mes_ano).split('-')[0])
        span_mes.innerText = mes
    })
}


const user = JSON.parse(sessionStorage.getItem('user'))


const getPostsComMaisInteracoes = () => {
    fetch('http://localhost:3333/api/posts/maisInteracoes').then(res => res.json()).then(res => {
        
        fillPostsMaisInteracoes(res)
        console.log(res)
    })
}


const fillPostsMaisInteracoes = (data) => {
    let html = ``

    data.map(post => {

    let postId = post.id 
    let date = post.date 
    let comentarios = post.comentarios 
    let likes = post.likes
    let userName = post.userName
    let foto = post.foto
    let userId = post.userId

    let styleFoto = `style="cursor:pointer"`

    if(foto){
        styleFoto = `style="background-image:url('../uploads/${foto}'); cursor:pointer"`
    }
    html += ` <div class="flex post_space column w-100 a-center">
                        <div class="row flex between w-100">
                            <span class="item-lg">Usuário</span>
                            <span class="item">Data</span>
                            <span class="item">Likes</span>
                            <span class="item">Comentários</span>
                        </div>
                        <div class="row between a-center flex w-100">
                            <div class="item-lg a-center between flex row">
                                
                                <div ${styleFoto} onclick="perfil(${userId})" id="foto_user_feed" class="foto_user">
                                    
                                </div>
                                <p class="w-100">${userName}</p>
                            </div>
                            <span class="item">${date}</span>
                            <span class="item">${likes}</span>
                            <span class="item">${comentarios}</span>
                        </div>
                        <div class="flex row jf-end w-100">
                            <button onclick="carregarPublicacao(${postId})" class="btn-seguir">Ver</button>
                        </div>
                    </div>`
    })

    posts_div.innerHTML += html
}

const getQtdPostsUltimosDias =() => {

fetch('http://localhost:3333/api/posts/graficoQtdPosts').then(res => res.json()).then(res => {
    console.log(res)

    let hoje = new Date()
    let ultimosDias = ultimosDiasSemanaPorIndice(hoje.getDay())
const ctx = document.getElementById('barChart').getContext('2d');
const dataValues2 = [res.five, res.four, res.three, res.two, res.one];
const maxValue2 = Math.max(...dataValues2);
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ultimosDias,
        datasets: [{
            label: 'Dados da Semana',
            data: [res.five, res.four, res.three, res.two, res.one],
            backgroundColor: dataValues2.map(value => 
                value === maxValue2 
                    ? '#8B4513' // Cor especial para a maior barra
                    : '#535D67' // Cor padrão para as outras barras
            ),
            
            borderWidth: 1,
            borderRadius:11,
            borderSkiped: 'none'
        }]
    },
    options: {
        plugins:{
            legend:{
                display: false
            }

        }
        ,
        scales: {
            x: {
                grid: {
                    display: false // Remove linhas da grade no eixo X
                },
                ticks: {
                    color: corDaFonte, // Cor dos rótulos no eixo X
                }
            },
            y: {
                display: false
            }
        }
    }
});
})
}


const getMediaPostPorUsuario =() => {
fetch('http://localhost:3333/api/posts/graficoMedia').then(res => res.json()).then(res => {

const ctx2 = document.getElementById('barChartPorUsuario').getContext('2d');
console.log(res)
let hoje = new Date()
let ultimosDias = ultimosDiasSemanaPorIndice(hoje.getDay())

const dataValues = [Number(res.five), Number(res.four), Number(res.three), Number(res.two), Number(res.one)];
const maxValue = Math.max(...dataValues);
const barChartPorUsuario = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ultimosDias,
        datasets: [{
            label: 'Dados da Semana',
            data: [res.five, res.four, res.three, res.two, res.one],
            backgroundColor: dataValues.map(value => 
                value === maxValue 
                    ? '#fff' // Cor especial para a maior barra
                    : '#535D67' // Cor padrão para as outras barras
            ),
           
            borderWidth: 1,
            borderRadius:11,
            borderSkiped: 'none'
        }]
    },
    options: {
        plugins:{
            legend:{
                display: false
            }

        }
        ,
        scales: {
            x: {
                grid: {
                    display: false // Remove linhas da grade no eixo X
                },
                ticks: {
                    color: '#fff', // Cor dos rótulos no eixo X
                }
            },
            y: {
                display: false
            }
        }
    }
});
})
}

countUser()
getPorcentagemSobUltimoMes()
getMesComMaisUsuariosCadastrados()
getUsersHoje()

getQtdPostsUltimosDias()

getMediaPostPorUsuario()
getUsuariosComMaisSeguidores()
getPostsComMaisInteracoes()
getUserComMaisPostagens()