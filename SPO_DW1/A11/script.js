'use strict';

const cepForm = document.querySelector('#cepForm');
const cepInput = document.querySelector('#cep');
const result = document.querySelector('#result');
const error = document.querySelector('#error');

cepForm.addEventListener('submit', function(e) {
    e.preventDefault();
    buscaCEP();
});

function apresentarDados(data) {
    if (data.erro) {
        error.classList.remove('d-none');
        result.classList.add('d-none');
    } else {
        error.classList.add('d-none');
        result.classList.remove('d-none');
        for (const campo in data) {
            if (document.querySelector('#' + campo)) {
                document.querySelector('#' + campo).value = data[campo]; 
            }
        }
    }
}

function buscaCEP() {
    let busca = cepInput.value.replace('-', '').replace('.', '');
    
    fetch(`https://viacep.com.br/ws/${busca}/json/`)
        .then(response => response.json())
        .then(data => apresentarDados(data))
        .catch(e => console.log('Erro: ', e.message));
}
