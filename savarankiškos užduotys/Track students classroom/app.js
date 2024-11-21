// 1. Create a Classroom class.
// 2. Each classroom tracks how many students are currently in it using a property students.
// 3. Add a static property totalStudents to track how many students are in all classrooms combined.
// 4. Write these methods:

//  *addStudents(count): Adds students to the classroom and updates totalStudents.
//  *removeStudents(count): Removes students from the classroom (cannot go below 0) and updates totalStudents.
//  *getTotalStudents() (static): Logs the total number of students across all classrooms.

class Classroom {
    constructor(parameters) {
        this.students = 0;
    }
    static totalStudents = 0;

    addStudents (count) {
        this.students += count;
        Classroom.totalStudents += count;
    }

    removeStudents(count) {
        this.students -= count;
        if (this.students < 0) {
            this.students =0;
        }
        Classroom.totalStudents -= count;
        if (Classroom.totalStudents < 0) {
            Classroom.totalStudents=0;
        }
    }
}

//testavimas

const ClassroomA = new Classroom();
const ClassroomB = new Classroom();


ClassroomA.addStudents(10);
ClassroomB.addStudents(100);
ClassroomA.removeStudents(5);
ClassroomB.removeStudents(50)

console.log(ClassroomA.students);
console.log(ClassroomB.students);
console.log(Classroom.totalStudents);
