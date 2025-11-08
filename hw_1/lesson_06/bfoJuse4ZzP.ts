{
    function stringToArray(str: any): string[] {
        if (typeof str === 'string' && str) {
            return str.split(' ');
        } else {
            return [''];
        }
    }

    let str: string = 'Ревуть воли як ясла повні';
    let arr: string[] = stringToArray(str);

    console.log(str);
    console.log(arr);

    console.log(stringToArray(null));
    console.log(stringToArray(55));
    console.log(stringToArray({id: 'id'}));
}