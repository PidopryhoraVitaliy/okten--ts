const div: HTMLDivElement = document.createElement('div');
div.id = 'text';
div.innerText = 'Hello World!';

const btn: HTMLButtonElement = document.createElement('button');
btn.innerText = 'delete div!';
btn.addEventListener('click', function (): void {
    div.remove();
    this.disabled = true;
});

document.body.append(div, btn);
