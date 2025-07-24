function fetchData(callback) {
    setTimeout(() => {
        const data = [1, 2, 3];
        callback(data);
    }, 1000);
}


function printdata(data) {
    console.log(data);
}


fetchData(printdata)