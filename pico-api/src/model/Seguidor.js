const connectionBanco = require('../database/connection');


const checkSeguir = async (seguido_id, seguidor_id) => {
    try{
        console.log(seguido_id, seguidor_id)
        const [rows] = await connectionBanco.query(`SELECT * FROM seguidor WHERE seguido_id = '${seguido_id}' AND seguidor_id = '${seguidor_id}'`);
        return rows;
    }catch(e) {
        return{
            message: 'Erro interno no servidor!',
            error: e
        }
    }  
} 


const getCountSeguidoresById = async (id) =>{
    try{
        const [result] = await connectionBanco.query(`SELECT COUNT(s.seguido_id) AS seguidores FROM user as usuario
            JOIN seguidor s 
            ON s.seguido_id = usuario.id AND usuario.id = ${id}
WHERE s.status = 1;`);
            return result;

    }catch (e) {
        return {
            message: 'Erro interno no servidor',
            error: e
        }
    }
}

const getCountSeguindoById = async (id) =>{
    try{
        const [result] = await connectionBanco.query(`SELECT COUNT(s.seguido_id) AS seguindo FROM user as usuario
            JOIN seguidor s 
            ON s.seguidor_id = usuario.id AND usuario.id = ${id}
            WHERE s.status = 1;`);
            return result;

    }catch (e) {
        return {
            message: 'Erro interno no servidor',
            error: e
        }
    }
}




const updateSeguir =  async (seguido_id, seguidor_id) => {
    try{
    const [updateRows] = await connectionBanco.execute(`UPDATE seguidor SET status = 1 WHERE seguido_id = ${seguido_id} AND seguidor_id = ${seguidor_id}`) 
        if(updateRows.affectedRows > 0){
            return {
                message: 'Sucesso ao seguir'
            }
        }else{
            return {
                message: 'Erro no servidor'
            }
        }
    }catch(e) {
        return {
            message: 'Erro no servidor',
            error: e
        }
    } 
}

const insertSeguir =  async(seguido_id, seguidor_id) =>{
    try{
        await connectionBanco.execute('INSERT INTO seguidor (seguido_id, seguidor_id) VALUES (?,?)', [seguido_id, seguidor_id])
        return {
            message: 'Sucesso ao seguir'
        } 
    }catch(e){
        return {
            message: 'Erro no servidor',
            error: e
        }
    }
}

const deixarSeguir = async (seguido_id, seguidor_id) => {
    try{
        const [updateRows] = await connectionBanco.execute(`UPDATE seguidor SET status = 0 WHERE seguido_id = ? AND seguidor_id = ? `, [seguido_id, seguidor_id]);

        if(updateRows.affectedRows > 0){
            return {
                message: 'Sucesso'
            }
        }else{
            return {
                message: 'Erro ao deixar de seguir'
            }
        }

    }catch(e) {
        return {
            message: 'Erro interno no servidor',
            error: e
        }
    } 
}


module.exports = {
    checkSeguir,
    updateSeguir,
    insertSeguir,
    deixarSeguir,
    getCountSeguidoresById,
    getCountSeguindoById
}