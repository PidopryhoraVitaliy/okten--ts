function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currentCurrency;
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            currentCurrency = currencyValue;
        }
    }
    return sumUAH / currentCurrency.value;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));
console.log(exchange(10000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 47.6}], 'EUR'));
