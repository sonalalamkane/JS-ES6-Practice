function student(rollno, name) {
    this.rollno = rollno;
    this.name = name;
}

student.prototype.sayname = function() {
    console.log("My name is ", this.name);
};

const stud = new student(1, 'sonal');
stud.sayname();


function college(rollno, name, cid, cname) {
    student.call(this, rollno, name);
    this.cid = cid;
    this.cname = cname;
}

college.prototype = Object.create(student.prototype);

const col = new college(2, 'aaaa', 12, 'KPC');
col.sayname();
console.log(col);