/*
goToURL()
hoverOverPractices()
clickOnFrontendTesting()
clickOnAlerts()
validateTheHeadingIsAlert()
*/

function goToURL() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1. URL');
            resolve();
        }, 2000);
    });
}

function hoverOverPractices() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. HOVER OVER');
            resolve();
        }, 1000);
    });
}

function clickOnFrontendTesting() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. CLICK ON FRONTEND TESTING');
            resolve();
        }, 1000);
    });
}

function clickOnAlerts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('4. CLICK ON ALERTS');
            resolve();
        }, 1000);
    });
}

function validateTheHeadingIsAlert() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('I FAILED THIS ON PURPOSE!');
            resolve();
            console.log('5. VALIDATE THE HEADING');
        }, 1000);
    }); 
}

async function test() {
    try{
        await goToURL();
        await hoverOverPractices();
        await clickOnFrontendTesting();
        await clickOnAlerts();
        await validateTheHeadingIsAlert();
    }
    catch(err) {
        console.log(err);
    }
}

test();

// goToURL();
// hoverOverPractices();
// clickOnFrontendTesting();
// clickOnAlerts();
// validateTheHeadingIsAlert();

// Callback solution
// goToURL(() => {
//     hoverOverPractices(() => {
//         clickOnFrontendTesting(() => {
//             clickOnAlerts(() => {
//                 validateTheHeadingIsAlert();
//             });
//         });
//     });
// });