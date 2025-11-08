{
    function logArray(array: any[]): void {
        for (const item of array) {
            console.log(item);
        }
    }

    logArray([1, 2, 3, 4, 5]);
    logArray(['test', true, "3", 4, 5]);
}