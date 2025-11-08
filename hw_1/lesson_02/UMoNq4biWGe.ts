{
    const strN: string | null = prompt("Enter a number (0-31)");
    if (strN) {
        const day = +strN;

        if (day < 0) {
            console.log('negative number');
        } else if (day > 0 && day <= 10) {
            console.log('1 decade');
        } else if (day > 10 && day <= 20) {
            console.log('2 decade');
        } else if (day > 20 && day <= 31) {
            console.log('3 decade');
        } else {
            console.log('too big number or wrong number...');
        }
    }
}