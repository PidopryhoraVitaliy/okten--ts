"use strict";
{
    let coursesAndDurationArray = [
        { title: 'JavaScript Complex', monthDuration: 5 },
        { title: 'Java Complex', monthDuration: 6 },
        { title: 'Python Complex', monthDuration: 6 },
        { title: 'QA Complex', monthDuration: 4 },
        { title: 'FullStack', monthDuration: 7 },
        { title: 'Frontend', monthDuration: 4 }
    ];
    const wrap = document.createElement('div');
    for (const course of coursesAndDurationArray) {
        const div = document.createElement('div');
        div.classList.add('item');
        const titleElem = document.createElement('h1');
        titleElem.classList.add('heading');
        titleElem.innerText = course.title;
        const descriptionElem = document.createElement('p');
        descriptionElem.classList.add('description');
        descriptionElem.innerText = course.monthDuration.toString();
        div.append(titleElem, descriptionElem);
        wrap.appendChild(div);
    }
    document.body.appendChild(wrap);
}
