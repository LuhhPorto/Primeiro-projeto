
function validar() {
    var nome = document.getElementById("mercadoria")

    if (mercadoria.value == "") {
        alert ('Favor preencher o campo mercadoria!');
        mercadoria.focus();
        return
    }

    if (valor.value == "") {
        alert ('Favor preencher o campo valor!')
        return
    }
    alert ('Dados Enviados');
} 

function dinheirobr() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}), ([0-9]{2}$)/g, ".$1,$2");
        }
    elemento.value = valor;
        if(valor == 'NaN') elemento.value = '';
}
