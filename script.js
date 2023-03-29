function calcularIMC(){
    // pegando o id do formulario
   /*  var formulario = document.getElementById("formulario");	 */
    
    // quilos é a minha variavel
    // formulario é o id 
    // value é valor do input
    // o + na frente transforma em number a string	
        
    var peso  =  document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    
     // altura
    /* var altura = (peso * 100 + altura) / 100; */
     
    // imc
    var imc = peso / (altura * altura);
    
    // o metodo toFixed fixa apenas duas casas decimais apos o ponto.
    /* formulario.imc.value = imc.toFixed(3); */
    
    if(imc < 20)
    {
        document.getElementById('resultado').innerText = ` ${imc.toFixed(2)} Você esta abaixo do peso!` 
        console.log(imc) 
    } 
    else if(imc >20 && imc <= 25)
    {
        document.getElementById('resultado').innerText=` ${imc.toFixed(2)} Você esta abaixo no Peso Ideal`
    }
    else if(imc >25 && imc <= 30)
    {
        document.getElementById('resultado').innerText=` ${imc.toFixed(2)} Você está Acima do Peso`
    }
    else if(imc >30 && imc <= 35)
    {
        document.getElementById('resultado').innerText=` ${imc.toFixed(2)} Você está em OBESIDADE MODERADA`
    }
    else if(imc >35 && imc <= 40)
    {
        document.getElementById('resultado').innerText=` ${imc.toFixed(2)} Você está em OBESIDADE SEVERA`
    }
    else if(imc >40 && imc <= 50)
    {
        document.getElementById('resultado').innerText=` ${imc.toFixed(2)} Você está em OBESIDADE MÓRBIDA`
    }
    else
    {
        document.getElementById('resultado').innerText=` ${imc.toFixed(2)} Você está OBESO`
    }
}
