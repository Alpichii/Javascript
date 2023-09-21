const myPromise = new Promise((resolve, reject) => {
    // your code goes here
    resolve();
});

console.log(myPromise);





function getURL1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('NAVIGATED TO URL!');
            resolve();
        }, 5000);
    }); 
}

function findHeadingElement1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('LOCATED THE HEADING!');
            resolve();
        }, 2000); 
    });   
}

function assertHeadingElementText1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('ASSERTED THE HEADING TEXT!');
            resolve();
        }, 1000);
    });   
}

getURL1()
.then(() => {
    findHeadingElement1()
    .then(() => {
        assertHeadingElementText1();
    });
});

// Handling Promise Erros=rs 
function getURL2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('NAVIGATED TO URL!');
            reject('ERROR, problem while navigating!');
        }, 5000);
    }); 
}

function findHeadingElement2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('LOCATED THE HEADING!');
            resolve();
        }, 2000); 
    });   
}

getURL2()
.then(() => {
    findHeadingElement2();
})
.catch((err) => {console.log(err)});
