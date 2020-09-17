# random-number-csprng-with-exclusive-range
## Description
```
It's an extension of random-number-csprng package to exclude ranges.
```
## Installation 
```
npm install --save rng-with-excluded-ranges
```
## Import
```
const rngWithExcludedRanges = require("rng-with-excluded-ranges")
```
## Usage
```
const Promise = require("bluebird");
 
Promise.try(function() {
    return rngWithExcludedRanges(10, 30, [{minimum:2, maximum: 5},{minimum:14, maximum: 16}]);
}).then(function(number) {
    console.log("Your random number:", number);
}).catch({code: "RandomGenerationError"}, function(err) {
    console.log("Something went wrong!");
});
```
## Specifications
```
rngWithExcludedRanges(minimum, maximum, ranges)

ranges: is optional. Example [{minimum:2, maximum: 5}]
minimum: The lowest possible value in the range.
maximum: The highest possible value in the range. Inclusive.

Returns a Promise that resolves to a random number within the specified range.

Note that the range is inclusive, and both numbers must be integer values. 
```
## Error Messages
```
Any errors that occur during the random number generation process will be of this type. 
The error object will also have a code property, set to the string "RandomGenerationError".
```
