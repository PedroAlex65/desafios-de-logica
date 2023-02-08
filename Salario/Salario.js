// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, 

// o valor que receber por hora e calcula o salário desse funcionário.

//  A seguir, mostre o número e o salário do funcionário, com duas casas decimais.


// Entrada: O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, 
// representando o número, quantidade de horas trabalhadas e o valor que o funcionario recebe por hora traabalhada, 
// respectivamente.


// Sáida: Imprima o número e o salário do funcionario, conforme exemplo fornecdido, 
// com um espaço em branco antes e depois da igualdade. No caso do salário, 
// também deve haver um espaço em branco após o $

let funcionarioUm = 25

let workedHours = 100

let hoursValue = 5.50

let salary = workedHours * hoursValue

console.log('NUMBER = ' + funcionarioUm + '\n' + 'SALARY = '+'U$ ' + salary.toFixed(2))

