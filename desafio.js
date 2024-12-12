/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. 
Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

// Função principal sempre com verbo - acao a ser executada
function contarMedalhas() {
    let paises = [];
    let numeroMedalhasOuro = 0;
    let numeroMedalhasPrata = 0;
    let numeroMedalhasBronze = 0;
  
    while (true) {
      let nomePais = prompt("Digite o nome do país (ou 'sair' para terminar):"); // vai aparecer janela para digitacao
  
      if (nomePais.toLowerCase() === "sair") { //conversao para letra minuscula e comparacao com sair, caso seja estritamente igual o codigo acaba
        break;
      }
  
      numeroMedalhasOuro = parseFloat(prompt(`Digite o número de medalhas de OURO ${nomePais}:`));
      if  (!isNaN(numeroMedalhasOuro)) { //!isNaN verifica se e um numero
        paises.push(nomePais);
        console.log('nome pais', nomePais)
        console.log('numero medalhas ouro', numeroMedalhasOuro)
      } else {
        alert("Por favor, insira um valor numérico válido para o número de medalhas de OURO.");
        break;
      }
      numeroMedalhasPrata = parseFloat(prompt(`Digite o número de medalhas de PRATA ${nomePais}:`));
      if  (!isNaN(numeroMedalhasPrata)) {
        paises.push(nomePais);
        console.log('nome pais', nomePais)
        console.log('numero medalhas prata', numeroMedalhasPrata)
      } else {
        alert("Por favor, insira um valor numérico válido para o número de medalhas de PRATA.");
        break;
      }
      numeroMedalhasBronze = parseFloat(prompt(`Digite o número de medalhas de BRONZE ${nomePais}:`));
      if  (!isNaN(numeroMedalhasBronze)) {
        paises.push(nomePais);
        console.log('nome pais', nomePais)
        console.log('numero medalhas bronze', numeroMedalhasBronze)
      } else {
        alert("Por favor, insira um valor numérico válido para o número de medalhas de BRONZE.");
        break;
      }
    }
  
    if (paises.length > 0) {
      let totalMedalhas = numeroMedalhasOuro + numeroMedalhasPrata + numeroMedalhasBronze;
      console.log('soma medalhas', totalMedalhas);
      console.log('numero de medalhas ouro', numeroMedalhasOuro);
      console.log('numero de medalhas prata', numeroMedalhasPrata);
      console.log('numero de medalhas bronze', numeroMedalhasBronze);
    
    }} 
    contarMedalhas() // vai executar acao iniciada na funcao

    //criar for e log para cada pais