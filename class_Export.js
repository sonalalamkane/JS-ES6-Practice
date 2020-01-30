class Student {
    constructor(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }
    sayrollno() {
        console.log("My age is ", this.rollno);
    }
    sayname() {
        console.log("My name is ", this.name);
    }
}

export default new Student(1, "sonal");
// module.exports = s;