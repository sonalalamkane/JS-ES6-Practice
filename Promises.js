// Simpale Promise.

// const prom = new Promise((resolve, reject) => {
//     const num = 5;
//     if (num % 2 == 0) {
//         resolve(num);
//     } else {
//         reject(num);
//     }
// });

// prom.then(function(fromresolve) {
//     console.log("even", fromresolve);
// }).catch(function(fromreject) {
//     console.log("odd", fromreject);
// });

// Promise Hell

function addNum(a, b) {
    return new Promise((resolve, reject) => {
        if (a < 0) {
            reject("a or b is -ve");
        }
        const c = a + b;
        setTimeout(() => {
            resolve(c);
        }, 500);;
    });
}

function mulNum(q, w) {
    return new Promise((resolve, reject) => {
        if (q < 0) {
            reject("q || w is -ve");
        }
        setTimeout(() => {
            resolve(q * w);
        }, 800);;
    });
}

function divNum(s) {
    return new Promise((resolve, reject) => {
        if (s < 0) {
            reject("s is -ve");
        }
        setTimeout(() => {
            resolve(s / s);
        }, 500);
    });
}

//If we enter the -ve value then it will give the error.
addNum(10, 10).then((data) => {
    console.log("adding data ", data);
    return mulNum(data, 10);
}).then((muldata) => {
    console.log("Multiplication is ", muldata);
    return divNum(muldata);
}).then((divdata) => {
    console.log("divided data ", divdata);
}).catch(Error => {
    console.log(Error);
});