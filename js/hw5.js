let message;
let inputContry = prompt('Введите страну доставки');


switch (inputContry) {
  case 'Китай':
    message = `Доставка в ${inputContry} будет стоить 100 кредитов`;
    break;

  case 'Чили':
    message = `Доставка в ${inputContry} будет стоить 250 кредитов`;
    break;

  case 'Австралия':
    message = `Доставка в ${inputContry} будет стоить 170 кредитов`;
    break;

  case 'Индия':
    message = `Доставка в ${inputContry} будет стоить 80 кредитов`;
    break;

  case 'Ямайка':
    message = `Доставка в ${inputContry} будет стоить 120 кредитов`;
        break;
    
  case null:
        message = 'Отменено пользователем';
         break;

    default:
    message = 'В вашей стране доставка не доступна';
}
alert(message);