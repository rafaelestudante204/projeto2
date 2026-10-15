var formulario = document.getElementById("discountForm");

formulario.addEventListener('submit', function(event) { // 'event' com e minúsculo
    event.preventDefault();

    // 1. Corrigido: pegamos o .value e convertemos para número
    const valorC = Number(document.getElementById('valorCompra').value);

    // 2. Corrigido: adicionado o ID 'resultado' dentro dos parênteses
    const imputResultado = document.getElementById('resultado');

    // (O 'return;' foi removido daqui para o código poder continuar)

    let desconto = 0;
    if (valorC > 200) {
        desconto = 10;
    } else if (valorC > 50) {
        desconto = 5;
    } else {
        desconto = 0;
    }

    const valorDesconto = (valorC * desconto) / 100;
    const valorFinal = valorC - valorDesconto;

    // 3. Corrigido: trocado aspas simples por crases (``) para a interpolação funcionar
    if (desconto === 0) {
        imputResultado.value = `sem desconto (total: R$ ${valorFinal.toFixed(2)})`;
    } else {
        // 4. Corrigido: 'valor final' ajustado para 'valorFinal' e 'tofixed' para 'toFixed'
        imputResultado.value = `R$ ${valorFinal.toFixed(2)} (${desconto}% de desc.)`;
    }
});