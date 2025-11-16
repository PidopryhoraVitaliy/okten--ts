"use strict";
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів
{
    const users = [];
    const names = ["Vasia", "Petro", "Ira", "Olena", "Andrii", "Svitlana", 'Vitalii', 'Kolia', 'Nastia'];
    for (let i = 0; i < 100; i++) {
        users.push({
            id: i + 1,
            name: names[Math.floor(Math.random() * names.length)],
            age: Math.floor(Math.random() * 40) + 15
        });
    }
    console.log(users);
    const dataContainer = document.querySelector('#wrap .data-container');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let pointer = 0;
    const countPerPage = 10;
    showUsers(pointer, countPerPage);
    prevBtn.addEventListener('click', () => {
        pointer -= countPerPage;
        if (pointer < 0) {
            pointer = 0;
        }
        // console.log(pointer);
        showUsers(pointer, countPerPage);
    });
    nextBtn.addEventListener('click', () => {
        pointer += countPerPage;
        if (pointer > users.length - 1) {
            pointer = users.length - countPerPage;
        }
        // console.log(pointer);
        showUsers(pointer, countPerPage);
    });
    function showUsers(pointer, count) {
        dataContainer.innerHTML = '';
        for (let i = pointer; i < pointer + count; i++) {
            const user = users[i];
            const data = document.createElement('div');
            data.innerText = `${user.id} - name: ${user.name} - age: ${user.age}`;
            dataContainer.appendChild(data);
        }
    }
}
