
const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'jack','queen','king', 'ace'];
// const cardColors = ['red','black'];

const getCardColor = (cardSuit) => {
    if (cardSuit === 'diamond' || cardSuit === 'heart' ) {
        return 'red';
    } else {
        return 'black';
    }
}

let cards = [];

for (const cardSuit of cardSuits) {
    const color = getCardColor(cardSuit);
    for (const value of cardValues) {
        cards.push({cardSuit, color, value});
    }
}

console.log(cards);

let cards1 = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
let cards2 = cards.filter(card => card.value === '6');
let cards3 = cards.filter(card => card.color === 'red');
let cards4 = cards.filter(card => card.cardSuit === 'diamond');
let excludedCardValues = ['6', '7', '8'];
let cards5 = cards.filter(card => card.cardSuit === 'spade' && !excludedCardValues.includes(card.value));

console.log('знайти піковий туз');
console.log(cards1);

console.log('всі шістки');
console.log(cards2);

console.log('всі червоні карти');
console.log(cards3);

console.log('всі буби');
console.log(cards4);

console.log('всі трефи від 9 та більше');
console.log(cards5);

// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
// – знайти піковий туз
// – всі шістки
// – всі червоні карти
// – всі буби
// – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }