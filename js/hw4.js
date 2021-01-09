/* const credits = 23580;
const pricePerDroid = 3000;
let message;
let total = prompt('how many droids would you like to buy?');

let totalPrice = Number(total) * pricePerDroid;
if (total === null) {
    message = 'Отменено пользователем!'
}
else if (totalPrice <= credits)
    message = `Вы купили ${total} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
else {
    message = 'Недостаточно средств на счету!'
}
alert(message) */


const credits = 23580;
const pricePerDroid = 3000;
let message;
let total = prompt('how many droids would you like to buy?');

let totalPrice = total * pricePerDroid;
if (total === null) {
    message = 'Отменено пользователем!'
}
else if (totalPrice <= credits)
    message = `Вы купили ${total} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
else {
    message = 'Недостаточно средств на счету!'
}
alert(message)