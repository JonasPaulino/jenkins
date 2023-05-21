function calcular(){
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    if (!isNaN(valor1) && !isNaN(valor2)) {
        let total = valor1 * valor2;
        alert('O total é: ' + total);
    } else {
        alert('É preciso informar os dois valores');
    }
    
}