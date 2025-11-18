"use strict";
// TS. ДЗ 3
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь
{
    async function foobar(url) {
        const result = await fetch(url);
        return await result.json();
    }
    async function getCartData() {
        const cartsResponse = await foobar('https://dummyjson.com/carts');
        console.log(cartsResponse);
    }
    getCartData();
}
