function executarExercicio7() {
    alert(" Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. ")

    for (let i = 0, soma = 0; i < 6; i++) {
        let nota = parseFloat(prompt("Digite a nota do aluno (entre 0 e 10):"));
        while (nota < 0 || nota > 10) {
          nota = parseFloat(prompt("Valor inválido. Por favor, digite uma nota entre 0 e 10:"));
        }
        soma += nota;
      }
      alert("A média do aluno é: " + (soma / 6).toFixed(2));
}