const rngWithExcludedRanges = require("./");

new Promise((resolve, reject) => {
    resolve(rngWithExcludedRanges(1, 10000000000));
    // resolve(randomNumber(1, 10000000000, [{minimum: 2001, maximum: 2000000}]));
    // resolve(randomNumber(1, 10000000000, [{minimum: 2001, maximum: 2000000}, {
    //     minimum: 100,
    //     maximum: 1000
    // }, {minimum: 1001, maximum: 2000}]));
})
    .catch((error) => {
        return error;
    })
    .then().then(random => {
    console.log('random', random)
})
