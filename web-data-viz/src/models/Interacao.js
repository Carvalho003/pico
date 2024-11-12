const database = require('../database/config');
const { store } = require('./User');

const storeLike = (userId, postId) => {
    const sql = `INSERT INTO interacao (user_id, post_id, tipo) VALUES (${userId}, ${postId}, 'like')`;
    return database.executar(sql);
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
    getComentario
}