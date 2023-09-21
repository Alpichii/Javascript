function accessFile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1. FILE ACCESS');
            const randomNumber = Math.floor(Math.random() * 2);
            console.log('1. FILE ACCESS', randomNumber);
            if (randomNumber === 1) resolve('SUCCESFULLY ACCESSED THE FILE');
            else reject('ERROR: FILE CANNOT BE ACCESSED');
        }, 5000);
    })
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. DATA');
            const randomNumber = Math.floor(Math.random() * 2);
            console.log('2. DATA', randomNumber);
            if (randomNumber === 1) resolve('SUCCESFULLY READ DATA');
            else reject('ERROR: COULD NOT READ DATA');
        }, 3000);
    });
}

function passData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. PROCESSING DATA');
            const randomNumber = Math.floor(Math.random() * 2);
            console.log('3. PROCESSING DATA', randomNumber);
            if (randomNumber === 1) resolve('PROCESSED THE DATA');
            else reject('ERROR: DATA COULD NOT BE PROCESSED');
        }, 2000);
    });
}

async function testTheDataFetchingProcess() {
    try{
        await accessFile();
        await getData();
        await passData();
    }
    catch(err) {
        console.log(err);
    }
}

testTheDataFetchingProcess();