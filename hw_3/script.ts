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
    type CartsResponse = {
        carts: CartType[];
        total: number;
        skip: number;
        limit: number;
    };

    async function foobar<T>(url: string): Promise<T> {
        const result: Response = await fetch(url);
        return await result.json() as T;
    }

    async function getCartData() {
        const cartsResponse: CartsResponse = await foobar<CartsResponse>('https://dummyjson.com/carts');
        console.log(cartsResponse);
    }
    getCartData();
}
