const database = require('../database/config');
const { store } = require('./User');

const storeLike = (userId, postId) => {
    const sql = `INSERT INTO interacao (user_id, post_id, tipo) VALUES (${userId}, ${postId}, 'like')`;
    return database.executar(sql);
}

const setVisto = (interacaoId) => {
    const sql = `UPDATE interacao SET visto = now() WHERE id = ${interacaoId}`;
    return database.executar(sql);
}

const getNotificacoes = (logadoId, limit) => {
    const sql = `SELECT "id", s.seguidor_id as user_id, u.userName, u.foto, "seguidor" as post_id, "seguiu" as acao, s.dtHora as dt_hora,
CASE 
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 AND timestampdiff(DAY, s.dtHora, now()) <= 0 AND
timestampdiff(HOUR, s.dtHora, now()) <= 0 AND timestampdiff(MINUTE, s.dtHora, now()) <= 0
THEN concat(timestampdiff(SECOND, s.dtHora, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 AND timestampdiff(DAY, s.dtHora, now()) <= 0 AND
timestampdiff(HOUR, s.dtHora, now()) <= 0 
THEN concat(timestampdiff(MINUTE, s.dtHora, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 AND timestampdiff(DAY, s.dtHora, now()) <= 0
THEN concat(timestampdiff(HOUR, s.dtHora, now()), ' horas atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 
THEN concat(timestampdiff(DAY, s.dtHora, now()), ' dias atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 
THEN concat(timestampdiff(WEEK, s.dtHora, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, s.dtHora, now()), ' meses atrás')
END AS tempo, s.visto as visto FROM user AS u
JOIN seguidor s 
ON s.seguidor_id = u.id AND s.seguido_id = ${logadoId} 
WHERE s.seguidor_id != ${logadoId}

UNION

SELECT i.id as interacao_id ,u.id as user_id, u.userName, u.foto, i.post_id as post_id,
CASE 
WHEN i.tipo = 'like'
THEN concat('curtiu')
WHEN i.tipo = 'comentario'
THEN concat('comentou')
ELSE
concat('compartilhou') 
END AS acao, i.dtHora as dt_hora,
CASE 
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 AND timestampdiff(DAY, i.dtHora, now()) <= 0 AND
timestampdiff(HOUR, i.dtHora, now()) <= 0 AND timestampdiff(MINUTE, i.dtHora, now()) <= 0
THEN concat(timestampdiff(SECOND, i.dtHora, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 AND timestampdiff(DAY, i.dtHora, now()) <= 0 AND
timestampdiff(HOUR, i.dtHora, now()) <= 0 
THEN concat(timestampdiff(MINUTE, i.dtHora, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 AND timestampdiff(DAY, i.dtHora, now()) <= 0
THEN concat(timestampdiff(HOUR, i.dtHora, now()), ' horas atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 
THEN concat(timestampdiff(DAY, i.dtHora, now()), ' dias atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 
THEN concat(timestampdiff(WEEK, i.dtHora, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, i.dtHora, now()), ' meses atrás')
END AS tempo, i.visto as visto
  FROM interacao as i
JOIN user u
ON u.id = i.user_id
JOIN post p 
ON i.post_id = p.id
JOIN user logado
ON logado.id = p.user_id AND logado.id =${logadoId}
WHERE u.id != ${logadoId}
ORDER BY dt_hora DESC LIMIT  ${limit};`

return database.executar(sql);
}

const countNotificacoes = (logadoId) => {
    const sql = `
SELECT COUNT(*) as notificacoes FROM (
SELECT "id", s.seguidor_id, u.userName, u.foto, "seguidor" as post_id, "seguiu" as acao, s.dtHora as dt_hora,
CASE 
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 AND timestampdiff(DAY, s.dtHora, now()) <= 0 AND
timestampdiff(HOUR, s.dtHora, now()) <= 0 AND timestampdiff(MINUTE, s.dtHora, now()) <= 0
THEN concat(timestampdiff(SECOND, s.dtHora, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 AND timestampdiff(DAY, s.dtHora, now()) <= 0 AND
timestampdiff(HOUR, s.dtHora, now()) <= 0 
THEN concat(timestampdiff(MINUTE, s.dtHora, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 AND timestampdiff(DAY, s.dtHora, now()) <= 0
THEN concat(timestampdiff(HOUR, s.dtHora, now()), ' horas atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, s.dtHora, now()) <= 0 
THEN concat(timestampdiff(DAY, s.dtHora, now()), ' dias atrás')
WHEN timestampdiff(MONTH, s.dtHora, now()) <= 0 
THEN concat(timestampdiff(WEEK, s.dtHora, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, s.dtHora, now()), ' meses atrás')
END AS tempo, s.visto as visto FROM user AS u
JOIN seguidor s 
ON s.seguidor_id = u.id AND s.seguido_id = ${logadoId} 
WHERE s.seguidor_id != ${logadoId} AND s.visto IS NULL

UNION

SELECT i.id as interacao_id ,u.id as user_id, u.userName, u.foto, i.post_id as post_id,
CASE 
WHEN i.tipo = 'like'
THEN concat('curtiu')
WHEN i.tipo = 'comentario'
THEN concat('comentou')
ELSE
concat('compartilhou') 
END AS acao, i.dtHora as dt_hora,
CASE 
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 AND timestampdiff(DAY, i.dtHora, now()) <= 0 AND
timestampdiff(HOUR, i.dtHora, now()) <= 0 AND timestampdiff(MINUTE, i.dtHora, now()) <= 0
THEN concat(timestampdiff(SECOND, i.dtHora, now()), ' segundos atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 AND timestampdiff(DAY, i.dtHora, now()) <= 0 AND
timestampdiff(HOUR, i.dtHora, now()) <= 0 
THEN concat(timestampdiff(MINUTE, i.dtHora, now()), ' minutos atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 AND timestampdiff(DAY, i.dtHora, now()) <= 0
THEN concat(timestampdiff(HOUR, i.dtHora, now()), ' horas atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 AND 
timestampdiff(WEEK, i.dtHora, now()) <= 0 
THEN concat(timestampdiff(DAY, i.dtHora, now()), ' dias atrás')
WHEN timestampdiff(MONTH, i.dtHora, now()) <= 0 
THEN concat(timestampdiff(WEEK, i.dtHora, now()), ' semanas atrás')
ELSE concat(timestampdiff(MONTH, i.dtHora, now()), ' meses atrás')
END AS tempo, i.visto as visto
  FROM interacao as i
JOIN user u
ON u.id = i.user_id
JOIN post p 
ON i.post_id = p.id
JOIN user logado
ON logado.id = p.user_id AND logado.id =${logadoId}
WHERE u.id != ${logadoId} AND i.visto IS NULL
ORDER BY dt_hora DESC

) AS notificacoes;
`

return database.executar(sql)
}

const countLikeInPostByIds = (userId, postId) =>{
    const sql = `select id from interacao
    WHERE user_id = ${userId} AND post_id = ${postId} AND tipo = 'like';`
    return database.executar(sql);
}

const deleteLike = (userId, postId) => {
    const sql = `DELETE FROM interacao WHERE user_id = ${userId} AND post_id = ${postId} AND tipo = 'like';`
    return database.executar(sql)
}

const storeComentario = (userId, postId, descricao) => {
    const sql = `INSERT INTO interacao (user_id, post_id, descricao, tipo) VALUES (${userId}, ${postId}, '${descricao}', 'comentario')`;
    return database.executar(sql)
}

const getComentario = (postId) => {
    const sql = `SELECT u.id, u.foto, u.nome, c.descricao FROM user AS u
JOIN interacao c 
ON c.user_id = u.id 
WHERE c.post_id = ${postId} AND tipo = 'comentario'`;
    return database.executar(sql)

}


module.exports = {
    countLikeInPostByIds,
    storeLike,
    deleteLike,
    storeComentario,
    getComentario,
    getNotificacoes,
    countNotificacoes,
    setVisto
}