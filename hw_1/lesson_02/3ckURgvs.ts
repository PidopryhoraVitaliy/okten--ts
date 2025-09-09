// @ts-ignore
let str: string | null = prompt("Enter a number (0-59)");
if (str) {
    let time: number = +str;
    if (time < 0) {
        console.log('negative number');
    } else if (time < 15) {
        console.log('1 part');
    } else if (time < 30) {
        console.log('2 part');
    } else if (time < 45) {
        console.log('3 part');
    } else if (time < 60) {
        console.log('4 part');
    } else {
        console.log('too big number or wrong number...');
    }
}