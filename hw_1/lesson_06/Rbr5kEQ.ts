{
    let arr: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    console.log(arr);

    // let strArr = arr.map(item => item.toString());
    let strArr: string[] = arr.map(item => item + '');
    console.log(strArr);
}