function executarExercicio4(){
    alert("Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).")

    let total = 0
    let quantidade = 0

    for(let i = 15; i <= 100; i++){
        total += i
        quantidade++
    }

    let media = total / quantidade

    alert("A média aritmética entre 15 e 100 é: " + media)
}