const strX: string | null = prompt("Enter first number");
const srtY: string | null = prompt("Enter second number");

if ((strX) && (srtY)) {
    const x: number = +strX;
    const y: number = +srtY;
    if (x === y) {
        console.log('equals number');
    } else if (x > y) {
        console.log(x);
    } else {
        console.log(y);
    }
}