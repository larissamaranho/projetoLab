const nome = prompt ("Qual o seu nome?");
if (nome !== null) {
  document.getElementById("bemVinde").innerHTML = "Seja bem vinde "+ nome;
  }

const alternative = prompt ("Olá" +", " + nome + "! \nVocê deseja responder nosso teste? \n Reponda com 1 ou 2 \n(1- Sim ou 2- Não)" );

 else if (alternative == "2"){
 questionDois= alert ("Ok, até logo!")
 }
   
 if (alternative == "1") {
  questionUm = prompt ("Qual é a capital de Recife? \n1 - O resultado é Pernambuco \n2 - O resultado é Boa Viagem")
 if (alternative == "1") 
 document.getElementById("certas").innerHTML = "Resposta 1";
}
 else if (alternative == "2"){
 document.getElementById("erradas").innerHTML = "Resposta 2";
 }

