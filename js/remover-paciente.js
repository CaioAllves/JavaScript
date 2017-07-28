var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("aleatorio");

    setTimeout(function(){
      paiDoAlvo.remove();
    },500);

});
