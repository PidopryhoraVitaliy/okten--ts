"use strict";
// TS. ДЗ 3
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь
{
    function foobar(url) {
        fetch(url)
            .then(response => response.json())
            .then((data) => data);
        // .catch();
        return {};
    }
    const cart = foobar('https://dummyjson.com/carts');
    console.log(cart);
}
