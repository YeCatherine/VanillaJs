import MyPromise from "./MyPromise";
import ReversePromise from "./ReversePromise";

// MyPromise instance.
new MyPromise((resolve) => {
    console.log('MyPromise');
    console.log(1);
    resolve();
})
    .synchThen(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    });
console.log(4);

// ReversePromise instance.
new ReversePromise((res) => {
    console.log('ReversePromise');
    console.log(1);
    res();
})
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4));
