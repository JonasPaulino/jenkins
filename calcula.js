function calcular(){
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    //verifica se está nulo
    if (!isNaN(valor1) && !isNaN(valor2)) {
        let total = valor1 + valor2;
        alert('O número: ' + valor1 + ' multiplicado por: '+ valor2 + ' é = ' + total);
    } else {
        alert('É preciso informar os dois valores');
    }
    
}