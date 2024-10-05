/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

// Função principal
function numerodemedalhas() {
    let paises = [];
    let medalhasdeouro = [];
    let medalhasdeprata = [];
    let medalhasdebronze = [];
    let totaldemedalhas = 0;
  
    while (true) {
      let país = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (país.toLowerCase() === "sair") {
        break;
      }
  
      let medalhadeouro = parseFloat(prompt(`Digite o número de medalhas de ouro ${país}:`));
      if  (!isNaN(medalhadeouro)) {
        país.push(paises);
        medalhasdeouro.push(medalhadeouro)
      } else {
        alert("Por favor, insira um valor numérico válido para o número de medalhas de ouro.");
      }
      let medalhadeprata = parseFloat(prompt(`Digite o número de medalhas de prata ${país}:`));
      if  (!isNaN(medalhadeprata)) {
        país.push(paises);
        medalhasdeprata.push(medalhadeprata)
      } else {
        alert("Por favor, insira um valor numérico válido para o número de medalhas de ouro.");
      }
      let medalhadebronze = parseFloat(prompt(`Digite o número de medalhas de ouro ${país}:`));
      if  (!isNaN(medalhadeouro)) {
        país.push(paises);
        medalhasdebronze.push(medalhadebronze)
      } else {
        alert("Por favor, insira um valor numérico válido para o número de medalhas de ouro.");
      }
    }
  
    if (paises.length > 0) {
      let somartiposdemedalhas = medalhasdeouro + medalhasdeprata + medalhadebronze;
  
      let maiormedalhasdeouro = medalhasdeouro[0];
      let maiormedalhasdeprata = medalhasdeprata[0];
      let maiormedalhasdebronze = medalhasdebronze[0];
    
  
    }}