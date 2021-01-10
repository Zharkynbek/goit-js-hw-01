//moi nerabotayushii variant


/* let total = 0;
let userNumber;
do {
 userNumber = prompt('Enter your number');
  total += Number(userNumber);
  console.log(total)
} while (Number.isNaN(Number(userNumber))  {
   alert('Было введено не число, попробуйте еще раз')
}

while (userNumber !== null) {
  alert(`Общая сумма чисел равна ${total}`);
}
   */
  

let input;
let total = 0;
do {
  input = prompt('Enter your number');
  Number.isNaN(Number(input)) ? alert('Было введено не число, попробуйте еще раз') : total += Number(input);
} while (input !== null) {
  alert(`Общая сумма чисел равна ${total}`);
};