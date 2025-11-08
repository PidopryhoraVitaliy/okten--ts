"use strict";
// Class
{
    class Course {
        constructor(title, monthDuration) {
            this.title = title;
            this.monthDuration = monthDuration;
        }
    }
    class CourseWithId extends Course {
        constructor(title, monthDuration, id) {
            super(title, monthDuration);
            this.id = id;
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
    let newArray = coursesAndDurationArray.map((course, index) => ({ ...course, id: index }));
    console.log(newArray);
}
// Interface
{
    let coursesAndDurationArray = [
        { title: 'JavaScript Complex', monthDuration: 5 },
        { title: 'Java Complex', monthDuration: 6 },
        { title: 'Python Complex', monthDuration: 6 },
        { title: 'QA Complex', monthDuration: 4 },
        { title: 'FullStack', monthDuration: 7 },
        { title: 'Frontend', monthDuration: 4 }
    ];
    let newArray = coursesAndDurationArray.map((course, index) => ({ ...course, id: index }));
    console.log(newArray);
}
// Type
{
    let coursesAndDurationArray = [
        { title: 'JavaScript Complex', monthDuration: 5 },
        { title: 'Java Complex', monthDuration: 6 },
        { title: 'Python Complex', monthDuration: 6 },
        { title: 'QA Complex', monthDuration: 4 },
        { title: 'FullStack', monthDuration: 7 },
        { title: 'Frontend', monthDuration: 4 }
    ];
    let newArray = coursesAndDurationArray.map((course, index) => ({ ...course, id: index }));
    console.log(newArray);
}
