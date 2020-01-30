const products = ["milk", "cow", "curd", "butter"];

// ForEach : It will perform operation on original array.

products.forEach((element, index) => {
    console.log("index is " + index + " element is " + element);
});

// MAP : It will create the new array and return the result.

const newlist = products.map(element => {
    return element + "new";
});

console.log("Original Array: ", products);
console.log("Map result: ", newlist);

//How to use Map in w.r.t Object.

const obj = [{ name: "sonal", age: 21 },
    { name: "dsf", age: 32 },
    { name: "wedfwe", age: 43 }
];

const objmap = obj.map(objele => {
    let newobj = {};
    newobj[objele.name] = objele.age;
    return newobj;
});

console.log("Object result: ", objmap);