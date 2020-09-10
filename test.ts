const rngWithExcludedRanges = require("./");

new Promise((resolve, reject) => {
    resolve(rngWithExcludedRanges(1, 10000000000));
    // resolve(rngWithExcludedRanges(1, 10000000000, [{minimum: 2001, maximum: 2000000}]));
    // resolve(rngWithExcludedRanges(0, 10000000000, [{minimum: 9424152799, maximum: 9482182798},
    //     {minimum: 200001, maximum: 6282835199},
    //     {minimum: 9976788001, maximum: 10000000000},
    //     {minimum: 9482182799, maximum: 9976788000},
    //     {minimum: 6282835200, maximum: 9424152798},
    //     {minimum: 0, maximum: 200000}
    // ]));
})
    .catch((error) => {
        return error;
    })
    .then().then(random => {
    console.log('random', random)
})
