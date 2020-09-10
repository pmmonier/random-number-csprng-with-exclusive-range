const rngWithExcludedRanges = require("./");
new Promise((resolve, reject) => {
    resolve(rngWithExcludedRanges(1, 10000000000));
})
    .catch((error) => {
    return error;
})
    .then().then(random => {
    console.log('random', random);
});
//# sourceMappingURL=test.js.map