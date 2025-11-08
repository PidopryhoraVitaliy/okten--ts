// Class
{
    class Course {
        title: string;
        monthDuration: number;

        constructor(title: string, monthDuration: number) {
            this.title = title;
            this.monthDuration = monthDuration;
        }
    }

    class CourseWithId extends Course {
        id: number;

        constructor(title: string, monthDuration: number, id: number) {
            super(title, monthDuration);
            this.id = id;
        }
    }

    let coursesAndDurationArray: Course[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let newArray: CourseWithId[] = coursesAndDurationArray.map<CourseWithId>((course: Course, index: number) => ({...course, id: index}));
    console.log(newArray);
}

// Interface
{
    interface ICourse {
        title: string;
        monthDuration: number;
    }

    interface ICourseWithId extends ICourse {
        id: number;
    }

    let coursesAndDurationArray: ICourse[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let newArray: ICourseWithId[] = coursesAndDurationArray.map((course: ICourse, index: number) => ({...course, id: index}));
    console.log(newArray);
}

// Type
{
    type Course = {
        title: string;
        monthDuration: number;
    }

    type CourseWithId = Course & { id: number; }

    let coursesAndDurationArray: Course[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    let newArray: CourseWithId[] = coursesAndDurationArray.map((course: Course, index: number) => ({...course, id: index}));
    console.log(newArray);
}