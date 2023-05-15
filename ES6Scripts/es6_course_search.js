const courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    }, {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    }, {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    }, {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    }, {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

function startDate(course) {
    return course.CourseId === 'PROG200';
}

let prog200StartDate = courses.find(startDate);
console.log(prog200StartDate.StartDate);

function titleOf(course) {
    return course.CourseId === 'PROJ500';
}

let proj500Title = courses.find(titleOf);
console.log(proj500Title.Title);

function titleThatCost(course) {
    return Number(course.Fee) <= "50.0";
}

let lessThanFifty = courses.filter(titleThatCost);
console.log("Courses under 50");
for(const course of lessThanFifty) {
    console.log(' ', course.Title);
}

function classesMeet(course) {
    return course.Location === 'Classroom 1';
}

let classTitle = courses.filter(classesMeet);
console.log("Courses in classroom 1");
for(let i=0; i<classTitle.length; i++) {
    const course = classTitle[i];
    console.log(' ', course.Title);
}