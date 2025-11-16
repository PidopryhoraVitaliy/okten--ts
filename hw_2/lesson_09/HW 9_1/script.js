"use strict";
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
//     в яких будуть зберігатись значення окремих властивостей,
//     для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
{
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    const wrap = document.createElement('div');
    wrap.classList.add('course-wrap');
    for (const course of coursesArray) {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course');
        const titleElem = document.createElement('div');
        titleElem.innerText = course.title;
        // duration
        const durationWrap = document.createElement('div');
        durationWrap.classList.add('duration-wrap');
        const monthDurationElem = document.createElement('div');
        monthDurationElem.innerText = course.monthDuration.toString();
        const hourDurationElem = document.createElement('div');
        hourDurationElem.innerText = course.hourDuration.toString();
        durationWrap.append(monthDurationElem, hourDurationElem);
        // modules
        const modulesWrap = document.createElement('div');
        modulesWrap.classList.add('modules-wrap');
        for (const module of course.modules) {
            const moduleElem = document.createElement('div');
            moduleElem.innerText = module;
            modulesWrap.appendChild(moduleElem);
        }
        courseItem.append(titleElem, durationWrap, modulesWrap);
        wrap.appendChild(courseItem);
    }
    document.body.appendChild(wrap);
}
