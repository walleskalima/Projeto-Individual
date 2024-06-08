var database = require("../database/config");

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nomeUsuario, email, senha, idMembro) {
    var instrucaoSql = `
        INSERT INTO usuarios (nomeUsuario, email, senha, fkMembro_fav) VALUES ('${nomeUsuario}', '${email}', '${senha}', ${idMembro});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
