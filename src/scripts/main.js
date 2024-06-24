const form = document.getElementById('form');
const numeroA = document.getElementById('campo-a');
const numeroB = document.getElementById('campo-b');
const acerto = document.getElementById('sucess-message');
const erro = document.getElementById('error-message');

function validaValor(numeroA, numeroB){
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = validaValor(numeroA.valueAsNumber, numeroB.valueAsNumber)
    if(validarForm){
        acerto.style.display = 'block';
        numeroA.value = '';
        numeroB.value = '';
    }
})

numeroB.addEventListener('keyup', function(e){
    let validarForm = validaValor(numeroA.valueAsNumber, numeroB.valueAsNumber)
    if(!validarForm){
        erro.style.display = 'block';
        acerto.style.display = 'none';
    }else{
        erro.style.display = 'none';
    }
})