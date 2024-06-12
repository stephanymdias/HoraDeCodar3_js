function executarExercicio11() {
    alert("Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.")

    var dentroIntervalo = 0;
    var foraIntervalo = 0;

    for (var i = 0; i < 10; i++) {
        var valor = parseInt(prompt("Informe o valor " + (i + 1) + ":"));

        if (valor >= 24 && valor <= 42) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }

    alert("Valores dentro do intervalo (24 e 42): " + dentroIntervalo + "\nValores fora do intervalo: " + foraIntervalo);
    
}