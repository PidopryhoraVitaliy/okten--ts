{
    function getArrayMinValue(array: number[]): number {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }

    console.log(getArrayMinValue([1, 2, 3, -5, 5]));
}