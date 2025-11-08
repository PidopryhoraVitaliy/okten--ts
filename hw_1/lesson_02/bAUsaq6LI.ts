{
    let str: string | null = prompt("Enter a number");
    if (str) {
        let x: number = +str;
        if (x !== 0) {
            console.log('Вірно');
        } else {
            console.log('Невірно');
        }
    }
}