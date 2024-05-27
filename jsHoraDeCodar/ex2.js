function executarExercicio2(){
    alert("Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize document.write  para escrever em tela e no final da repetição escreva EXPLOSÃO.")

    var contadora = 30
    var segundos = 30

    while(contadora <= 30 && contadora != -1 ){
        alert("00:" +segundos)

        contadora-- 
        segundos--
    }
    alert("EXPLOSÃO")
}