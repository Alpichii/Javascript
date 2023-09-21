/*
Test case
getURL -> takes 5 seconds
findHeadingElement -> takes 2 seconds
assertHeadingElementText -> 1 seconds
*/

function getURL() {
    setTimeout(() => {
        console.log('NAVIGATED TO URL!');
    }, 5000);
}

function findHeadingElement() {
    setTimeout(() => {
        console.log('LOCATED THE HEADING!');
    }, 2000); 
}

function assertHeadingElementText() {
    setTimeout(() => {
        console.log('ASSERTED THE HEADING TEXT!');
    }, 1000);
}

getURL();
findHeadingElement();
assertHeadingElementText();

/*
The order expected as below
NAVIGATED TO URL!
LOCATED THE HEADING!
ASSERTED THE HEADING TEXT!

BUT, we got
ASSERTED THE HEADING TEXT!
LOCATED THE HEADING!
NAVIGATED TO URL!
*/

// 1st way to solve above problem is using callbacks
// callback is function that takes another function as an argument

function getURL1(callback) {
    setTimeout(() => {
        console.log('NAVIGATED TO URL!');
        callback(); // executes after navigation to URL
    }, 5000);
}

function findHeadingElement1(callback) {
    setTimeout(() => {
        console.log('LOCATED THE HEADING!');
        callback(); // executes after finding the element
    }, 2000); 
}

function assertHeadingElementText1() {
    setTimeout(() => {
        console.log('ASSERTED THE HEADING TEXT!');
    }, 1000);
}


getURL1(() => {
    findHeadingElement1(() => {
        assertHeadingElementText1();
    });
});

function test1() {
    setTimeout(() => {
        console.log('NAVIGATED TO URL!');
        setTimeout(() => {
            console.log('LOCATED THE HEADING!');
            setTimeout(() => {
                console.log('ASSERTED THE HEADING TEXT!');   
            }, 1000);
        }, 2000);
    }, 5000);
}

test1();

// CallBack Error Handling
function checkAgeForDL(callback, err) {
    setTimeout(() => {
        const age = Math.floor(Math.random() * 50); // returns an age between 0 and 50
        console.log('Age is ', age);
        if(age < 16) err();
        else callback();
    }, 2000);
}

checkAgeForDL(() => {
    console.log('YOU CAN GET DL!');
}, 
() => {
    console.log('YOU CANNOT GET DL!');
});