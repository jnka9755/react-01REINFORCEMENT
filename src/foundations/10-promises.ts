const myPromise = new Promise<string>( (resolve, reject) => {

    setTimeout(() => {
        console.log('2 seconds have passed');
        //resolve('Success');
        reject('Error');
    }, 2000);
});


myPromise.then( (result) => {
    console.log(`Result: ${result}`)
}).catch(reason => {
    console.warn(`Reason: ${reason}`)
}).finally(() => {
    console.log('Finally');
});