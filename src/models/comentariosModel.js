var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT 
            co.id AS idComentario,
            co.comentario,
            co.nota,
            co.fk_usuario,
            co.fk_musica,
            us.id AS idUsuario,
            us.email
        FROM comentarios as co
            INNER JOIN usuarios as us
                ON co.fk_usuario = us.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    var instrucaoSql = `
        SELECT 
            co.id AS idComentario,
            co.comentario,
            co.nota,
            co.fk_usuario,
            co.fk_musica,
            us.id AS idUsuario,
            us.email
        FROM comentarios as co
            INNER JOIN usuarios as us
                ON co.fk_usuario = us.idUsuario
        WHERE c.comentario LIKE '%${texto}%';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            co.id AS idComentario,
            co.comentario,
            co.nota,
            co.fk_usuario,
            co.fk_musica,
            us.id AS idUsuario,
            us.email
        FROM comentarios as co
            INNER JOIN usuarios as us
                ON co.fk_usuario = us.idUsuario
        WHERE us.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(comentario, nota, idUsuario, idMusica) {
    var instrucaoSql = `
        INSERT INTO comentarios (comentario, nota, fk_usuario, fk_musica) VALUES ('${comentario}', ${nota}, ${idUsuario}, ${idMusica});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoComentario, idComentario) {
    var instrucaoSql = `
        UPDATE comentarios SET comentario = '${novoComentario}' WHERE id = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idComentario) {
    var instrucaoSql = `
        DELETE FROM comentarios WHERE id = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
