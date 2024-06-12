function executarExercicio6() {
    alert("Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem Calcular a média de outro aluno Sim/Não? e solicitar um resposta. Se a resposta for S, o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.")

    let alunosAprovados = 0;

    function calcularMedia() {
        let nota1 = parseFloat(prompt("Digite a primeira nota:"));
        let nota2 = parseFloat(prompt("Digite a segunda nota:"));
        let media = (nota1 + nota2) / 2;

        if (media >= 9.5) {
            alert("Média final: " + media + ". Aluno aprovado!");
            alunosAprovados++;
        } else {
            alert("Média final: " + media + ". Aluno reprovado.");
        }

        let calcularOutro = prompt("Calcular a média de outro aluno Sim/Não?");
        if (calcularOutro.toUpperCase() === "S") {
            calcularMedia();
        }
    }

    calcularMedia();
    alert("Quantidade de alunos aprovados: " + alunosAprovados);

}