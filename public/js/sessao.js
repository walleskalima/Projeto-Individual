function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null && usuario) {
        // Ação a ser tomada quando a sessão é válida (por exemplo, atualizar a interface do usuário)
        alert("Sessão válida: " + nome + ", " + usuario);
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// function finalizarAguardar(texto) {
//     var divErrosLogin = document.getElementById("errosDelogin");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
