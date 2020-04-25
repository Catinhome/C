'use strict'
// Калькулятор

let menu = 0;
let sum = 0;

menu = +prompt ( "1) Сложение                                                                 2) Вычитание", 1 );
				
				if ( menu == 1 ) {
				let a = +prompt ( "Первое число: ", "" );
    let b = +prompt ( "Второе число: ", "" );
        
    let result = a + b;
    alert ( "Получилось: " + result );
} else if ( menu == 2 ) {
   	let a = +prompt ( "Первое число: ", "" );
    let b = +prompt ( "Второе число: ", "" );
        
    let result = a - b;
    alert ( "Получилось: " + result );
} else if ( menu == undefined || menu == "" ) {
				alert ( "⚙️ Завершение работы :D ⚙️" );
} else {
    alert ( "Такая функция ещё не поддерживается" );
}
