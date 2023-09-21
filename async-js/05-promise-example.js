function request(url) {
    return new Promise((success, error) => {
        if(url) success('Status Code: 200');
        else error('Status Code: 404');
    });
}

const url = 'www.techglobalschool.com';
request(url)
.then((res) => {console.log(res)})
.catch((err) => {console.log(err)});


function validateElementBlue(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(color === 'blue') resolve('SUCCESS! Element is blue!');
            else reject('FAILURE! Element is not blue!');
        }, 5000);
    });
} 

const myColor = 'blue';
validateElementBlue(myColor)
.then((res) => console.log(res))
.catch((err) => console.log(err));