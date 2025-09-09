type CourseType = {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray: CourseType [] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const superDuration = 5;

let course: CourseType = coursesAndDurationArray[0];
if (course.monthDuration > superDuration) {
    console.log('Супер', course.title, course.monthDuration);
}
course = coursesAndDurationArray[1];
if (course.monthDuration > superDuration) {
    console.log('Супер', course.title, course.monthDuration);
}
course = coursesAndDurationArray[2];
if (course.monthDuration > superDuration) {
    console.log('Супер', course.title, course.monthDuration);
}
course = coursesAndDurationArray[3];
if (course.monthDuration > superDuration) {
    console.log('Супер', course.title, course.monthDuration);
}
course = coursesAndDurationArray[4];
if (course.monthDuration > superDuration) {
    console.log('Супер', course.title, course.monthDuration);
}
course = coursesAndDurationArray[5];
if (course.monthDuration > superDuration) {
    console.log('Супер', course.title, course.monthDuration);
}