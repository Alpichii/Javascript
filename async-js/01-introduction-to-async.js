// Synchronous code
console.log('Hello World');
console.log('JavaScript');

function print1() {
    console.log('1');
}

function print2() {
    console.log('2');
}

print2();
print1();



function connectToDB() { // What if this delays
    setTimeout(() => {
        console.log('DB CONNECTED');
    }, 3000);
}

function fetchData() {
    console.log('DATA');
}

connectToDB();
fetchData(); // this function does not wait for connectToDB()

// How to sycnhronize these function to make sure we connected to DB regardless of how much time it takes and then fetch the data