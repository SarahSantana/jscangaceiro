// referencias dos campos do formulario
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);

// referencia da tabela de negociações
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    // cancela submição do formulario
    event.preventDefault();

    // adicionando linha na tabela para a nova negociação
    var tr = document.createElement('tr');

    // adicionando colunas para cada item da negociacao
    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // adicionando coluna que guarda volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);
});