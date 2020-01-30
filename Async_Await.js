// Simpale Async-Await.

// function display() {
//     console.log("......Entered Async.....");

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("resolved");
//         }, 2000);
//     });
// }


// async function msg() {
//     const msg = await display();
//     console.log("Message", msg);
// }

// msg();

// Async Hell

function addNum(a, b) {
    return new Promise((resolve) => {
        const c = a + b;
        setTimeout(() => {
            console.log("add = ", c);
        }, 500);;
    });
}

function mulNum(q, w) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Multiplication = ", q * w);
        }, 800);;
    });
}

function divNum(s) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Div = ", s / s);
        }, 500);
    });
}

async function MainFun() {
    try {
        const add = await addNum(10, 10);
        const mul = await mulNum(add, 10);
        const div = await divNum(mul, 10);

        console.log("End the MAin function ");
    } catch (err) {
        console.log(err);
    }

}

MainFun();