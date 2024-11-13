const database = require('../database/config');


const checkSeguir = async (seguido_id, seguidor_id) => {
    
        console.log(seguido_id, seguidor_id)
        const sql = `SELECT * FROM seguidor WHERE seguido_id = '${seguido_id}' AND seguidor_id = '${seguidor_id}'`;
        return database.executar(sql);
    
        
}  

const getSugestoes = (userId) => {
        const sql = `SELECT u.nome, u.foto,  u.id FROM user as u
WHERE (SELECT count(user.id) FROM user 
JOIN seguidor s 
ON s.seguidor_id = user.id AND s.seguido_id = u.id AND s.seguidor_id = ${userId}) = 0 LIMIT 4;`
        return database.executar(sql)
}



const searchSeguindoByUserId = async(search, limit, userId, userLogadoId) => {
    
        const sql = `SELECT user.id, user.userName,  user.foto,
                                            CASE 
                                            WHEN (SELECT COUNT(subseg.seguidor_id) FROM user AS subuser
                                            JOIN seguidor subseg
                                            ON subuser.id = subseg.seguidor_id AND subseg.seguidor_id = ${userLogadoId} AND subseg.seguido_id = s.seguido_id AND subseg.status = 1
                                            ) > 0
                                            THEN 'Segue'
                                            ELSE 'Não Segue'
                                            END AS Segue
                                            FROM user 
                                            JOIN seguidor s
                                            ON user.id = s.seguido_id and s.seguidor_id = ${userId}
                                            JOIN user user_seguidor
                                            ON s.seguidor_id  = user_seguidor.id AND s.status =1
                                            where user.id <> ${userId} AND (user.userName LIKE '%${search}%' OR user.nome LIKE '%${search}%') LIMIT ${limit};`
    return database.executar(sql);                                            
            
    
}



const searchSeguidoresByUserId = async(search, limit, userId, userLogadoId) => {
    
        const sql = `SELECT user.id, user.userName,  user.foto,
                                            CASE 
                                            WHEN (SELECT COUNT(subseg.seguidor_id) FROM user AS subuser
                                            JOIN seguidor subseg
                                            ON subuser.id = subseg.seguidor_id AND subseg.seguidor_id = ${userLogadoId} AND subseg.seguido_id = s.seguidor_id AND subseg.status = 1
                                            ) > 0
                                            THEN 'Segue'
                                            ELSE 'Não Segue'
                                            END AS Segue
                                            FROM user 
                                            JOIN seguidor s
                                            ON user.id = s.seguidor_id and s.seguido_id = ${userId}
                                            JOIN user user_seguido
                                            ON s.seguido_id  = user_seguido.id AND s.status =1
                                            where user.id <> ${userId} AND (user.userName LIKE '%${search}%' OR user.nome LIKE '%${search}%') LIMIT ${limit};`
    return database.executar(sql);                                            
    
}


const getCountSeguidoresById = async (id) =>{
    
        const sql =`SELECT COUNT(s.seguido_id) AS seguidores FROM user as usuario
            JOIN seguidor s 
            ON s.seguido_id = usuario.id AND usuario.id = ${id}
WHERE s.status = 1;`;
        return database.executar(sql);
            

    
}

const getCountSeguindoById = async (id) =>{
    
        const sql = `SELECT COUNT(s.seguido_id) AS seguindo FROM user as usuario
            JOIN seguidor s 
            ON s.seguidor_id = usuario.id AND usuario.id = ${id}
            WHERE s.status = 1;`
            return database.executar(sql);

    
        
    
}




const updateSeguir =  async (seguido_id, seguidor_id) => {
    
    const sql = `UPDATE seguidor SET status = 1 WHERE seguido_id = ${seguido_id} AND seguidor_id = ${seguidor_id}`;
    return database.executar(sql) 
        
   
}

const insertSeguir =  async(seguido_id, seguidor_id) =>{
    
        const sql = `INSERT INTO seguidor (seguido_id, seguidor_id) VALUES (${seguido_id},${seguidor_id})`;
        return database.executar(sql)
    
       
    
}

const deixarSeguir = async (seguido_id, seguidor_id) => {
    
       const sql = `DELETE FROM seguidor WHERE seguido_id = ${seguido_id} AND seguidor_id = ${seguidor_id} `;
        return database.executar(sql);
    
}




module.exports = {
    checkSeguir,
    updateSeguir,
    insertSeguir,
    deixarSeguir,
    getCountSeguidoresById,
    getCountSeguindoById,
    searchSeguindoByUserId,
    searchSeguidoresByUserId,
    getSugestoes
}