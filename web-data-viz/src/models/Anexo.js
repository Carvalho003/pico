const database = require('../database/config')

const storeAnexo = (caminho, postId) => {
    const sql = `INSERT INTO anexos_post (anexo, tipo, post_id) VALUES ('${caminho}', 'imagem', ${postId})`;
    return database.executar(sql);
}

module.exports = {
    storeAnexo
}