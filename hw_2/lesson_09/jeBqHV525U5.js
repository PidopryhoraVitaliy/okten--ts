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
    coursesAndDurationArray.forEach(course => {
        const div = document.createElement('div');
        div.innerText = `title: ${course.title}, monthDuration: ${course.monthDuration}`;
        wrap.appendChild(div);
    });
    document.body.appendChild(wrap);
}
