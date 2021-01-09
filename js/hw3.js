const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt('write your password')

 if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else if (password === null) {
    message = 'Отменено пользователем!'
} else {
     message = 'Доступ запрещен, неверный пароль!'
}
 
alert(message)
