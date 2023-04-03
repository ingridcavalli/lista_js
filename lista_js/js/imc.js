let homens = 0;
let mulheres = 0;

for (i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt('Altura da pessoa: ' + i ));
  let peso = parseFloat(prompt('Peso da pessoa: ' + i ));
  let sexo = prompt('Sexo da pessoa ' + i + ' (M ou F):');
  
  let IMC = peso / (altura ** 2);
  console.log(IMC);
  document.write('Pessoa ' + i + '<br>' + 'IMC: ' + IMC + '<br>');
 
  if (sexo == 'M') {
    homens++;
  } else if (sexo == 'F') {
    mulheres++;
  }
}

document.write('<br>Número de Homens: ' + homens + '<br>');
document.write('<br>Número de Mulheres: ' + mulheres + '<br>');