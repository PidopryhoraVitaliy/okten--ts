{
    let strDay = prompt("Enter a day (1-7)");
    if (strDay) {
        let day = +strDay;

        switch (day) {
            case 1: {
                console.log('monday');
                break;
            }
            case 2: {
                console.log('tuesday');
                break;
            }
            case 3: {
                console.log('wednesday');
                break;
            }
            case 4: {
                console.log('thursday');
                break;
            }
            case 5: {
                console.log('friday');
                break;
            }
            case 6: {
                console.log('saturday');
                break;
            }
            case 7: {
                console.log('sunday');
                break;
            }
            default: {
                console.log('wrong number');
            }
        }
    }
}