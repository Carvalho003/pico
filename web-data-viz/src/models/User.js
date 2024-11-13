
const database = require('../database/config');


const setFoto = (foto, userId) => {
        const sql = `UPDATE user SET foto = '${foto}' WHERE id = ${userId}`;
        return database.executar(sql)
}

const store = async (user) => {


    var instrucaoSql = `
        INSERT INTO user (nome, email, dtNasc, password) VALUES ('${user.nome}','${user.email}','${user.dtNasc}','${user.password}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

const authenticate = async (email, password) => {
   
        const sql = `SELECT id, nome, userName, email, foto, created_at FROM user WHERE email = '${email}' AND password = '${password}'`;
        return database.executar(sql);

        
   
}

const search = async(search, limit, logado_id) => {
    
    
        const sql = `SELECT user.id, user.userName,  user.foto,
                                            CASE 
                                            WHEN s.seguidor_id = ${logado_id} AND s.status =1
                                            THEN 'Segue'
                                            ELSE 'Não Segue'
                                            END AS Segue
                                            FROM user 
                                            left JOIN seguidor s
                                            ON user.id = s.seguido_id and s.seguidor_id = ${logado_id}
                                            left JOIN user logado 
                                            ON s.seguidor_id  = logado.id
                                            where user.id <> ${logado_id} AND (user.userName LIKE '%${search}%' OR user.nome LIKE '%${search}%') LIMIT ${limit}`
        return database.executar(sql)                                               
       
}

const setUsername = async(userId, userName) => {
    
        const sql = `UPDATE user SET userName = '${userName}' WHERE id = ${userId}`;
        return database.executar(sql);
        

        

    
}

const getById = async (id) => {
    
        const sql = `SELECT id, nome, userName, foto, fotoCapa FROM user WHERE id = ${id}`;

        return database.executar(sql);

}



module.exports = {
    store,
    authenticate,
    search,
    setUsername,
    getById,
    setFoto
}