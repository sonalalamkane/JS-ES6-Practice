class student {
    constructor(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }

    sayname() {
        console.log("My name is ", this.name);
    }
}

// const s = new student(1, "sonal");
// s.sayname();

class college extends student {
    constructor(rollno, name, cid, cname) {
        super(rollno, name);
        this.cid = cid;
        this.cname = cname;
    }
}

const c = new college(12, "aaaa", 13, "kpc");
c.sayname();