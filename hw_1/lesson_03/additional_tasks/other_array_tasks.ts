{
    function getRandomIntInclusive(min: number, max: number): number {
        const minCeiled: number = Math.ceil(min);
        const maxFloored: number = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    console.log('1. Створити пустий масив та :');

    console.log('a. заповнити його 50 парними числами за допомоги циклу.');
    const array: number[] = [];
    for (let i = 1; i <= 50; i++) {
        array.push(i * 2);
    }
    console.log(array);

    console.log('b. заповнити його 50 непарними числами за допомоги циклу.');
    array.length = 0;
    for (let i = 1; i <= 99; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    console.log(array);

    console.log('c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)');
    array.length = 0;
    for (let i = 1; i <= 20; i++) {
        array.push(getRandomIntInclusive(0, 100));
    }
    console.log(array);

    console.log('d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)');
    array.length = 0;
    for (let i = 1; i <= 20; i++) {
        array.push(getRandomIntInclusive(8, 732));
    }
    console.log(array);

//============================================================

    console.log('2. Вивести за допомогою console.log кожен третій елемент');
    for (let i = 2; i < array.length; i += 3) {
        console.log(array[i]);
    }

    console.log('3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.');
    for (let i = 2; i < array.length; i += 3) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }

    console.log('4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив');
    const evenElements = [];
    for (let i = 2; i < array.length; i += 3) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
            evenElements.push(array[i]);
        }
    }
    console.log(evenElements);

    console.log('5. Вивести кожен елемент масиву, сусід справа якого є парним');
    console.log('   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56');
// const example = [1, 2, 3, 5, 7, 9, 56, 8, 67];
    const example: number[] = [...array];
    console.log(example);
    for (let i = 0; i < example.length - 1; i++) {
        if (example[i + 1] % 2 === 0) {
            console.log(example[i]);
        }
    }

    console.log('6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.');
    const amounts: number[] = [100, 250, 50, 168, 120, 345, 188];
    let sum: number = 0;
    for (const amount of amounts) {
        sum += amount;
    }
    const average: number = (amounts.length) ? sum / amounts.length : 0;
    console.log('середній чек: ', average.toFixed(2));

    console.log('7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.');
    const randomArray: number[] = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(getRandomIntInclusive(0, 10));
    }
    console.log(randomArray);
    const copyRandomArray: number[] = [];
    for (const item of randomArray) {
        copyRandomArray.push(item * 5);
    }
    console.log(copyRandomArray);

    console.log('8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.');
    const testArray: (string | number | boolean)[] = ['asd', 4, 5, 6, '3', true, 'test', '44', 7];
    console.log(testArray);
    const numberFromTestArray: number[] = [];
    for (const item of testArray) {
        if (typeof item === 'number') {
            numberFromTestArray.push(item);
        }
    }
    console.log(numberFromTestArray);

//============================================================

    type UserWithIdType = {
        id: number,
        name: string,
        age: number,
        status: boolean
    }
    type CitiesWithIdType = {
        user_id: number,
        country: string,
        city: string
    }
    type UserWithAddress = {
        id: number,
        name: string,
        age: number,
        status: boolean,
        address: CitiesWithIdType
    }

    console.log('Users with cities:');
    let usersWithId: UserWithIdType[] = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
    let citiesWithId: CitiesWithIdType[] = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];
    let usersWithCities: UserWithAddress[] = [];
    for (const user of usersWithId) {
        let address: CitiesWithIdType = {
            user_id: 0,
            country: '',
            city: ''
        };
        for (const city of citiesWithId) {
            if (city.user_id === user.id) {
                // address = city;
                Object.assign(address, city);
            }
        }
        const userWithCity: UserWithAddress = {
            id: user.id,
            name: user.name,
            age: user.age,
            status: user.status,
            address: address
        }
        usersWithCities.push(userWithCity);
    }
    console.log(usersWithCities);
}
// //============================================================
//
//     console.log('– Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.');
//     const array10 = [];
//     for (let i = 0; i < 10; i++) {
//         array10.push(getRandomIntInclusive(1, 10));
//     }
//     console.log(array10);
//     for (const item of array10) {
//         if (item % 2 === 0) {
//             console.log(item);
//         }
//     }
//     console.log('– Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.');
//     const copyArray10 = [];
//     for (const item of array10) {
//         copyArray10.push(item);
//     }
//     console.log(copyArray10);
//
//     console.log('– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.');
//     const abc = ['a', 'b', 'c'];
//     let word = '';
//     for (let i = 0; i < abc.length; i++) {
//         word += abc[i];
//     }
//     console.log(word);
//
//     console.log('– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.');
//     word = '';
//     let i = 0;
//     while (i < abc.length) {
//         word += abc[i];
//         i++
//     }
//     console.log(word);
//
//     console.log('– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.');
//     word = '';
//     for (const item of abc) {
//         word += item;
//     }
//     console.log(word);
// }