const database = require('../database/config');



const getPublicacoesById =  (userId, userLogadoId) =>{
    
        const sql = `SELECT  
 p.id AS postId, p.descricao, u.nome, u.id, u.foto,
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
p.id AS postId, p.descricao, dono_post.nome, dono_post.id, dono_post.foto,
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
ON seg.seguido_id = dono_post.id
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



module.exports = {
    getPublicacoesById,
    getPublicacoesSeguindo
}