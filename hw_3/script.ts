// TS. ДЗ 3
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь

{
    type CartType = {
        id: number;
        total: number;
    }

    // function foobar<T>(url: string): T {
    //     fetch(url)
    //         .then(response => response.json() as Promise<T>)
    //         .then((data: T): T => data as T);
    //     // .catch();
    //     // return {} as T;
    // }

    // const cart: CartType = foobar<CartType>('https://dummyjson.com/carts');

    // console.log(cart);

}
