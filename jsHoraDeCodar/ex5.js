function executarExercicio5(){
    alert("Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.")

    let numero1 = parseInt(prompt("Informe um número: "))
    let numero2 = parseInt(prompt("Informe outro número: "))
    let total = 0;
    let quantidade = 0;

    if (numero1 >= numero2){
        alert("O segundo número deve ser maior que o primeiro.")
    }
    for (let i = numero1; i <= numero2; i++) {
        total += i; 
        quantidade++; 
    }

    let media = total / quantidade;

    // Exibe o resultado
    alert("A média aritmética dos números entre " + numero1 + " e " + numero2 + " é: " + media.toFixed(2));
}
