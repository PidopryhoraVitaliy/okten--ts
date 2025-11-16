{
    const items: string[] = ['Main', 'Products', 'About us', 'Contacts'];
    const ul: HTMLUListElement = document.createElement('ul');
    items.forEach(item => {
        const li: HTMLLIElement = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}