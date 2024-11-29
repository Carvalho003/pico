const database = require('../database/config');


const getPostsComMaisInteracoes = () => {
    const sql = `SELECT * FROM posts_com_mais_interacoes;`;
    return database.executar(sql)
}

const getQtdPostsUltimosDias = () => {
    const sql = `SELECT (select * from five_days) as five,
(select * from four_days) as four,
(select * from three_days) as three,
(select * from two_days) as two, 
(select * from one_day) as one`
return database.executar(sql)
}

const getMediaPostPorUsuario =() => {
    const sql = `select 
(select round(avg(posts), 1) from post_one_day) as one,
(select round(avg(posts), 1) from post_two_days) as two,
(select round(avg(posts), 1) from post_three) as three,
(select round(avg(posts), 1) from post_four) as four,
(select round(avg(posts), 1) from post_five) as five;`
return database.executar(sql)
}

const getPublicacoesById =  (userId, userLogadoId) =>{
    
        const sql = `SELECT  
 p.id AS postId, p.descricao, u.nome, u.id, u.foto, p.post_compartilhado_id as compartilhamento,
CASE 
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 AND timestampdiff(MINUTE, p.created_at, now()) <= 0
THEN concat(timestampdiff(SECOND, p.created_at, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 
THEN concat(timestampdiff(MINUTE, p.created_at, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0
THEN concat(timestampdiff(HOUR, p.created_at, now()), ' horas atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 
THEN concat(timestampdiff(DAY, p.created_at, now()), ' dias atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 
THEN concat(timestampdiff(WEEK, p.created_at, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, p.created_at, now()), ' meses atrás')
END AS tempo,
CASE 
WHEN
COUNT(a.tipo) > 0
THEN (SELECT GROUP_CONCAT(concat(an.tipo,';', an.anexo)   SEPARATOR '#') FROM post
join anexos_post an
on post.id = an.post_id
WHERE post.id = p.id)
ELSE 'SEM ANEXO'
END AS anexos,
(select count(i.id) FROM post as post
JOIN interacao i 
ON i.post_id = post.id
WHERE post.id = p.id AND i.tipo = 'like') AS likes,
(select COUNT(i_logado.id) FROM post as p_logado 
JOIN interacao i_logado
ON i_logado.post_id = p_logado.id
WHERE i_logado.user_id = ${userLogadoId} AND p_logado.id = p.id AND i_logado.tipo = 'like' ) AS likou
FROM user AS u
JOIN post p
LEFT JOIN interacao likes 
ON p.id = likes.post_id 
ON p.user_id = u.id
LEFT JOIN anexos_post a
ON p.id = a.post_id
WHERE 
u.id = ${userId}
GROUP BY p.descricao, p.created_at, p.id
ORDER BY p.created_at DESC`;
            return database.executar(sql);

    
    
}



const getPublicacoesSeguindo =  (userId) =>{
    console.log(userId, "id")
    const sql = `SELECT  
p.id AS postId, p.descricao, dono_post.nome, dono_post.id, dono_post.foto, p.post_compartilhado_id as compartilhamento,
CASE 
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 AND timestampdiff(MINUTE, p.created_at, now()) <= 0
THEN concat(timestampdiff(SECOND, p.created_at, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 
THEN concat(timestampdiff(MINUTE, p.created_at, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0
THEN concat(timestampdiff(HOUR, p.created_at, now()), ' horas atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 
THEN concat(timestampdiff(DAY, p.created_at, now()), ' dias atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 
THEN concat(timestampdiff(WEEK, p.created_at, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, p.created_at, now()), ' meses atrás')
END AS tempo,
CASE 
WHEN
COUNT(a.tipo) > 0
THEN (SELECT GROUP_CONCAT(concat(an.tipo,';', an.anexo)   SEPARATOR '#') FROM post
join anexos_post an
on post.id = an.post_id
WHERE post.id = p.id)
ELSE 'SEM ANEXO'
END AS anexos,
(select count(i.id) FROM post as post
JOIN interacao i 
ON i.post_id = post.id
WHERE post.id = p.id AND i.tipo = 'like') AS likes,
(select COUNT(i_logado.id) FROM post as p_logado 
JOIN interacao i_logado
ON i_logado.post_id = p_logado.id
WHERE i_logado.user_id = ${userId} AND p_logado.id = p.id AND i_logado.tipo = 'like') AS likou
FROM user AS u
JOIN seguidor seg
ON u.id = seg.seguidor_id AND seg.seguidor_id = ${userId}
JOIN user dono_post 
ON seg.seguido_id = dono_post.id OR dono_post.id = ${userId}
JOIN post p
LEFT JOIN interacao likes 
ON p.id = likes.post_id 
ON p.user_id = dono_post.id
LEFT JOIN anexos_post a
ON p.id = a.post_id
WHERE 
u.id = ${userId}
GROUP BY p.descricao, p.created_at, p.id
ORDER BY p.created_at DESC`;
        return database.executar(sql);



}



const getPublicacaoById =  (userId, postId) =>{
    console.log(userId, "id")
    const sql = `SELECT  
p.id AS postId, p.descricao, u.nome, u.id, u.foto, p.post_compartilhado_id as compartilhamento,
CASE 
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 AND timestampdiff(MINUTE, p.created_at, now()) <= 0
THEN concat(timestampdiff(SECOND, p.created_at, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 
THEN concat(timestampdiff(MINUTE, p.created_at, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0
THEN concat(timestampdiff(HOUR, p.created_at, now()), ' horas atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 
THEN concat(timestampdiff(DAY, p.created_at, now()), ' dias atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 
THEN concat(timestampdiff(WEEK, p.created_at, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, p.created_at, now()), ' meses atrás')
END AS tempo,
CASE 
WHEN
COUNT(a.tipo) > 0
THEN (SELECT GROUP_CONCAT(concat(an.tipo,';', an.anexo)   SEPARATOR '#') FROM post
join anexos_post an
on post.id = an.post_id
WHERE post.id = p.id)
ELSE 'SEM ANEXO'
END AS anexos,
(select count(i.id) FROM post as post
JOIN interacao i 
ON i.post_id = post.id
WHERE post.id = p.id AND i.tipo = 'like') AS likes,
(select COUNT(i_logado.id) FROM post as p_logado 
JOIN interacao i_logado
ON i_logado.post_id = p_logado.id
WHERE i_logado.user_id = ${userId} AND p_logado.id = p.id AND i_logado.tipo = 'like') AS likou
FROM user AS u
JOIN post p
LEFT JOIN interacao likes 
ON p.id = likes.post_id 
ON p.user_id = u.id
LEFT JOIN anexos_post a
ON p.id = a.post_id
GROUP BY p.descricao, p.created_at, p.id
HAVING postId = ${postId} ORDER BY likes DESC ` ;
        return database.executar(sql);



}


const getPublicacoes =  (userId) =>{
    console.log(userId, "id")
    const sql = `SELECT  
p.id AS postId, p.descricao, u.nome, u.id, u.foto, p.post_compartilhado_id as compartilhamento,
CASE 
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 AND timestampdiff(MINUTE, p.created_at, now()) <= 0
THEN concat(timestampdiff(SECOND, p.created_at, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0 AND
timestampdiff(HOUR, p.created_at, now()) <= 0 
THEN concat(timestampdiff(MINUTE, p.created_at, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 AND timestampdiff(DAY, p.created_at, now()) <= 0
THEN concat(timestampdiff(HOUR, p.created_at, now()), ' horas atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 AND 
timestampdiff(WEEK, p.created_at, now()) <= 0 
THEN concat(timestampdiff(DAY, p.created_at, now()), ' dias atrás')
WHEN timestampdiff(MONTH, p.created_at, now()) <= 0 
THEN concat(timestampdiff(WEEK, p.created_at, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, p.created_at, now()), ' meses atrás')
END AS tempo,
CASE 
WHEN
COUNT(a.tipo) > 0
THEN (SELECT GROUP_CONCAT(concat(an.tipo,';', an.anexo)   SEPARATOR '#') FROM post
join anexos_post an
on post.id = an.post_id
WHERE post.id = p.id)
ELSE 'SEM ANEXO'
END AS anexos,
(select count(i.id) FROM post as post
JOIN interacao i 
ON i.post_id = post.id
WHERE post.id = p.id AND i.tipo = 'like') AS likes,
(select COUNT(i_logado.id) FROM post as p_logado 
JOIN interacao i_logado
ON i_logado.post_id = p_logado.id
WHERE i_logado.user_id = ${userId} AND p_logado.id = p.id AND i_logado.tipo = 'like') AS likou
FROM user AS u
JOIN post p
LEFT JOIN interacao likes 
ON p.id = likes.post_id 
ON p.user_id = u.id
LEFT JOIN anexos_post a
ON p.id = a.post_id
GROUP BY p.descricao, p.created_at, p.id
ORDER BY likes DESC ` ;
        return database.executar(sql);



}

const storePublicacao = (descricao, userId) => {
    const sql = `INSERT INTO post (descricao, user_id) VALUES ('${descricao}', ${userId})`;
    return database.executar(sql)
}

const sharePublicacao = (descricao, userId, postId) => {
    const sql = `INSERT INTO post (descricao, user_id, post_compartilhado_id) VALUES ('${descricao}', ${userId}, ${postId})`;
    return database.executar(sql)
}


module.exports = {
    getPublicacoesById,
    getPublicacoesSeguindo,
    storePublicacao,
    getPublicacoes,
    getPublicacaoById,
    sharePublicacao,
    getQtdPostsUltimosDias,
    getMediaPostPorUsuario,
    getPostsComMaisInteracoes
}