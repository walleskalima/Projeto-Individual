var database = require("../database/config");

function buscarMembrosPorUsuario(idUsuario) {
    var instrucao = `
    select mbts.nome from membros_bts as mbts
    inner join usuarios as us on us.fkMembro_fav = mbts.idMembro where idUsuario = '${idUsuario}';
    `;
    return database.executar(instrucao);
}

function buscarVotosMembros() {
    const instrucao = `
        SELECT membts.nome AS 'Membro do BTS', 
               COUNT(us.fkMembro_fav) AS 'Quantidade de votos'
        FROM membros_bts AS membts
        LEFT JOIN usuarios AS us ON membts.idMembro = us.fkMembro_fav
        GROUP BY membts.nome;
    `;

    database.executar(instrucao)
}

function enviarFavorito(idUsuario, membros) {
    var instrucao = `
        INSERT INTO favoritos (fkUsuario, membro1, membro2, membro3, membro4, membro5, membro6, membro7)
        VALUES (${idUsuario}, ${membros[0]}, ${membros[1]}, ${membros[2]}, ${membros[3]}, ${membros[4]}, ${membros[5]}, ${membros[6]});
    `;
    return database.executar(instrucao);
}

function verFavorito() {
    var instrucao = `
        SELECT 
            SUM(membro1) AS RM, 
            SUM(membro2) AS Jin, 
            SUM(membro3) AS Suga, 
            SUM(membro4) AS JHope, 
            SUM(membro5) AS Jimin, 
            SUM(membro6) AS V, 
            SUM(membro7) AS Jungkook 
        FROM favoritos;
    `;
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO membros_bts (nome) VALUES ('${nome}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    buscarMembrosPorUsuario,
    buscarVotosMembros,
    enviarFavorito,
    verFavorito,
    cadastrar
};


