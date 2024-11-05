const connectionBanco = require('../database/connection')

const store = async (user) => {
    try {


        await connectionBanco.execute('INSERT INTO user (nome, email, dtNasc, password) VALUES (?,?,?,?)', [user.nome, user.email, user.dtNasc, user.password]);


        return {
            message: 'Usuário criado com sucesso!'
        }
    } catch (e) {
        return {
            message: 'Erro ao criar usuário',
            erro: e
        }
    }
}

const authenticate = async (email, password) => {
    try {

        const [rows] = await connectionBanco.query(`SELECT id, nome, userName, email, foto, created_at FROM user WHERE email = '${email}' AND password = '${password}'`);
        if (rows.length > 0) {
            return rows[0];
        } else {
            return {
                message: 'Email ou Senha incorretos!',  
            }
        }
    } catch (e) {
        return {
            message: 'Erro Interno',
            error: e
        }
    }
}

const search = async(search, limit, logado_id) => {
    console.log(logado_id);
    try{
        const [rows] = await connectionBanco.query(`SELECT user.id, user.userName,  user.foto,
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
                                            where user.id <> ${logado_id} AND (user.userName LIKE '%${search}%' OR user.nome LIKE '%${search}%') LIMIT ${limit}`);
        console.log(rows)                                            
        if(rows.length > 0){
            
           return rows
            
        }else {
            return {
                message: 'Nenhum usuário encontrado'
            }
        }
        }catch(e){
            
            return {
                message: 'Erro interno no servidor!',
                error: e
            }
        }
}

const setUsername = async(userId, userName) => {
    try {
        const [result] = await connectionBanco.execute(`UPDATE user SET userName = ? WHERE id = ${userId}`, [userName]);
        

        if (result.affectedRows > 0) {
            return {
                message: 'UserName atualizado',
                userName: userName
            }
        }

    } catch (e) {

        if (e.code == "ER_DUP_ENTRY") {
            return {
                message: 'Nome de já usuário esta sendo utilizado',
                error: e
            }
        } else if(e.code == "ER_DATA_TOO_LONG"){
            return {
                message: 'Nome de usuário muito longo, use até 20 caracteres',
                error: e
            }
        }
         else {
            return {
                message: 'Erro interno no servidor',
                error: e
            }
        }
    }
}

const getById = async (id) => {
    try{
        const [result] = await connectionBanco.query(`SELECT id, nome, userName, foto, fotoCapa FROM user WHERE id = ${id}`);

        return result;

    }catch(e) {
        return {
            message: 'Erro interno no servidor', 
            error: e
        }
    }
}


module.exports = {
    store,
    authenticate,
    search,
    setUsername,
    getById
}