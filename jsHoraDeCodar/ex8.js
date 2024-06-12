function executarExercicio8() {
    alert("Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário")

    var N = prompt("Digite um valor para N: ");
    N = parseInt(N);
    for (var i = 1; i <= N; i++) {
        alert(i);
    }
}