var titulo = document.querySelector (".titulo");

titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

            paciente = pacientes[i];

            var tdPeso = paciente.querySelector(".info-peso");
            var tdAltura = paciente.querySelector (".info-altura");

            var peso = tdPeso.textContent;
            var altura = tdAltura.textContent;

            var tdImc = paciente.querySelector(".info-imc");

            var alturaEhValida = validaAltura(altura);
            var pesoEhValido = validaPeso(peso);

            if(!pesoEhValido){
                console.log("Peso inválido");
                tdImc.textContent = "Peso inválido!";
                pesoEhValido = false;

                paciente.classList.add("paciente-invalido");
            }

            if(!alturaEhValida){
                console.log("Altura inválida");
                tdImc.textContent = "Altura inválida!";
                alturaEhValida = false;

                paciente.classList.add("paciente-invalido");
            }

            if(pesoEhValido && alturaEhValida){
                var imc = calculaImc(peso,altura);
                tdImc.textContent = imc;
            }

}

function validaPeso(peso) {
    if(peso >= 0 && peso < 300){
          return true;
    }else {
          return false
    }
}

function validaAltura (altura) {
    if (altura >= 0 && altura < 3.00){
            return true;
    } else {
            return false;
    }
}

function calculaImc (peso, altura){
    var imc = 0
    imc = peso / ( altura * altura);
    return imc.toFixed(2);
}
