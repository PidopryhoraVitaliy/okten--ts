"use strict";
{
    function sortNums(array, direction) {
        if (direction === 'ascending') {
            return array.sort((a, b) => a - b);
        }
        else if (direction === 'descending') {
            return array.sort((a, b) => b - a);
        }
        else {
            return array;
        }
    }
    let nums = [11, 21, 3];
    console.log(nums);
    console.log('ascending:', sortNums(nums, 'ascending'));
    console.log('descending', sortNums(nums, 'descending'));
    console.log('test', sortNums(nums, 'test'));
}
