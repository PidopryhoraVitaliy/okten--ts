{
    type CardType = {
        cardSuit: string,
        color: string,
        value: string,
    }
    type DeckOfCardsType = {
        spades: CardType [],
        diamonds: CardType [],
        hearts: CardType [],
        clubs: CardType []
    }

    const cardSuits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
    const cardValues: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    const getCardColor = (cardSuit: string): string => {
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            return 'red';
        } else {
            return 'black';
        }
    }

    let cards: CardType[] = [];

    for (const cardSuit of cardSuits) {
        const color: string = getCardColor(cardSuit);
        for (const value of cardValues) {
            cards.push({cardSuit, color, value});
        }
    }

    console.log(cards);

    const acc: DeckOfCardsType = cards.reduce((acc: DeckOfCardsType, card: CardType): DeckOfCardsType => {
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
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });

    console.log(acc);
}
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }