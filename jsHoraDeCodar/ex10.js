function executarExercicio10() {
    alert("Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.")

    var n = parseInt(prompt("Digite um número para a tabuada:"));
    var tabuadas = "";
    for (var i = 1; i <= n; i++) {
        tabuadas += "Tabuada de " + i + ":\n";
        for (var j = 1; j <= 10; j++) {
            tabuadas += i + " x " + j + " = " + (i * j) + "\n";
        }
        tabuadas += "\n";
    }
    alert(tabuadas);
    
}