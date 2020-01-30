const obj = {
    name: "sonal",
    age: 21,
    sayname: function() {
        console.log("I am ", this.name);
        //This is what simple function.In that the this is point to the sayname's this.
        //so it will give the undefined.so we need to define that=this.
        // that = this;

        // function inner() {
        //     console.log("My age is ", that.age);
        // }
        // inner();

        //This is the use of arrow function it will point to whole object.so we need to use only "this".

        const innerfun = () => {
            console.log("My age is ", this.age);
        }
        innerfun();
    }
}

obj.sayname();