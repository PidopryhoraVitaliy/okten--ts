
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

const acc = cards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(acc);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }