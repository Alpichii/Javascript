// async function goToURL () {
//     console.log('URL');
// }

// Above function equals below
// function goToURL () {
//     return new Promise((resolve, reject) => {
//         console.log('URL');
//         resolve();
//     });
// }

// goToURL()
// .then(() => console.log('SUCCESS'))
// .catch(() => console.log('FAIL'));

function goToURL () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('URL');
            resolve();
        }, 2000);
    });
}

function validateElement() {
    console.log('VALIDATION');
}

async function mainTest() {
    await goToURL(); // URL
    validateElement(); // VALIDATION
}

mainTest();