
const database = require('../database/config');



const setFoto = (foto, userId) => {
        const sql = `UPDATE user SET foto = '${foto}' WHERE id = ${userId}`;
        return database.executar(sql)
}

const getUsersHoje = () => {
        const sql = `SELECT COUNT(id) as usuarios FROM user WHERE created_at BETWEEN DATE_SUB(now(), INTERVAL 1 DAY) AND now()`
        return database.executar(sql);
}
const setFotoCapa = (foto, userId) => {
        const sql = `UPDATE user SET fotoCapa = '${foto}' WHERE id = ${userId}`;
        return database.executar(sql)
}

const setNome = (nome, userId) => {
        const sql = `UPDATE user SET nome = '${nome}' WHERE id = ${userId}`;
        return database.executar(sql)
}

const getMesComMaisUsuariosCadastrados = () => {
        const sql = `SELECT mes_ano  FROM usuarios_por_mes_ano
WHERE usuarios = (SELECT MAX(usuarios) FROM usuarios_por_mes_ano);`
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
   
        const sql = `SELECT id, nome, userName, email, foto, created_at, nivel_permissao FROM user WHERE email = '${email}' AND password = '${password}'`;
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
                                            where user.id <> ${logado_id} AND user.userName IS NOT NULL AND (user.userName LIKE '%${search}%' OR user.nome LIKE '%${search}%') LIMIT ${limit}`
        return database.executar(sql)                                               
       
}

const setUsername = async(userId, userName) => {
    
        const sql = `UPDATE user SET userName = '${userName}' WHERE id = ${userId}`;
        return database.executar(sql);
        

        

    
}

const getById = async (id) => {
    
        const sql = `SELECT id, nome, userName, foto, email, dtNasc, created_at, fotoCapa, nivel_permissao FROM user WHERE id = ${id}`;

        return database.executar(sql);

}

const countUsers = () => {
        const sql = `SELECT COUNT(id) as usuarios FROM user`
        return database.executar(sql);
}

const getPorcentagemSobUltimoMes= () => {
        const sql = `select *  from porcentagem_usuarios_sob_ultimo_mes`
        return database.executar(sql)
}

const setEmail = (email, userId) => {
        const sql = `UPDATE user SET email = '${email}' WHERE id = ${userId}`;
        return database.executar(sql);
}

const setPassword = (senha, userId) => {
        const sql = `UPDATE user SET password = '${senha}' WHERE id = ${userId}`;
        return database.executar(sql);
}


module.exports = {
    store,
    authenticate,
    search,
    setUsername,
    getById,
    setFoto,
    setFotoCapa,
    setNome,
    setEmail,
    setPassword,
    countUsers,
    getPorcentagemSobUltimoMes,
    getMesComMaisUsuariosCadastrados,
    getUsersHoje
}