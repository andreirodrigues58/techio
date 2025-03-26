$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        // Toggling the icon between bars and x
        $('#mobile_btn i').toggleClass('fa-bars fa-times');
    });
});

function validarFormulario() {
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefone = document.getElementById("telefone").value.trim();
    var ingresso = document.getElementById("ingresso").value;

    if (nome === "" || email === "" || telefone === "" || ingresso === "") {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
    }

    // Redireciona para a página de pagamento
    window.location.href = 'pagamento.html';
}

document.addEventListener("DOMContentLoaded", function () {
    const mobileBtn = document.getElementById("mobile_btn");
    const mobileMenu = document.getElementById("mobile_menu");

    mobileBtn.addEventListener("click", function () {
        // Alterna a exibição do menu
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    });
});

