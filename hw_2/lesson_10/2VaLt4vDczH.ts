{
    const restoredValue: string | null = localStorage.getItem('number');

    let num: number = 0;

    if (typeof restoredValue === 'string') {
        num = +restoredValue;
    }

    num += 1;

    const numDiv: HTMLDivElement = document.getElementById('num') as HTMLDivElement;
    numDiv.innerText = num.toString();

    localStorage.setItem('number', num.toString());
}