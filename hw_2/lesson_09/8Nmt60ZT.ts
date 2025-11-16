{
    const div: HTMLDivElement = document.createElement('div');
    div.innerText = '8Nmt60ZT';
    div.classList.add('wrap');
    div.classList.add('collapse');
    div.classList.add('alpha');
    div.classList.add('beta');
    const div2: HTMLDivElement = div.cloneNode(true) as HTMLDivElement;
    document.body.append(div, div2);
}