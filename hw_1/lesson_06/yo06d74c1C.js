"use strict";
{
    function logArray(arr, logName) {
        console.log('--------------------', logName);
        for (const item of arr) {
            console.log(item);
        }
    }
    let coursesAndDurationArray = [
        { title: 'JavaScript Complex', monthDuration: 5 },
        { title: 'Java Complex', monthDuration: 6 },
        { title: 'Python Complex', monthDuration: 6 },
        { title: 'QA Complex', monthDuration: 4 },
        { title: 'FullStack', monthDuration: 7 },
        { title: 'Frontend', monthDuration: 4 }
    ];
    logArray(coursesAndDurationArray, 'origin');
    coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
    logArray(coursesAndDurationArray, 'sorted');
    let filtered = coursesAndDurationArray.filter(item => item.monthDuration >= 5);
    logArray(filtered, 'filtered');
    let newCourses = coursesAndDurationArray.map((item, index) => {
        return { ...item, id: index + 1 };
    });
    logArray(newCourses, 'with id');
}
