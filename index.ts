module.exports = function rngExcludedRanges(minimum, maximum, ranges?) {
    const randomNumber = require("random-number-csprng");
    if (ranges) {
        let numberOfValuesTExclude = 0;
        ranges.sort((current, next) => (current.minimum > next.minimum) ? 1 : (current.minimum === next.minimum) ? ((current.maximum > next.maximum) ? 1 : -1) : -1).forEach(function (range, index, arr) {
            if ((!range.minimum && range.minimum != 0) || !range.maximum) {
                console.log('range', range)
                throw new Error('Missing minimum or maximum in RANGES')
            }
            if (range.minimum > range.maximum) {
                throw new Error('The minimum must be lower than maximum in RANGES')
            }
            if (range.minimum < minimum) {
                throw new Error('The minimum in RANGES must be higher than minimum parameter')
            }
            if (range.maximum > maximum) {
                throw new Error('The maximum in RANGES must be lower than maximum parameter')
            }
            for (let i = index + 1; i < arr.length; i++) {
                if (range.minimum >= arr[i].minimum || range.maximum >= arr[i].minimum) {
                    throw new Error('RANGES cannot overlap each other.');
                }
            }
            numberOfValuesTExclude += range.maximum - range.minimum;
            if (range.minimum != minimum)
                numberOfValuesTExclude++
        })

        if (maximum - numberOfValuesTExclude === 0)
            throw new Error('Excluded ranges cannot cover all given range.');

        return new Promise((resolve, reject) => {
            resolve(randomNumber(minimum, maximum - numberOfValuesTExclude));
        })
            .catch((error) => {
                return error;
            })
            .then().then(random => {
                // @ts-ignore
                let position = Math.abs(random);
                let continueWhile = false;
                let lastRangeMaximum;
                do {
                    continueWhile = false;
                    ranges.filter(function (range) {
                        if (lastRangeMaximum)
                            return range.minimum > lastRangeMaximum && range.minimum < position
                        else
                            return range.minimum < position
                    }).forEach(function (range) {
                        continueWhile = true;
                        lastRangeMaximum = range.maximum
                        position += range.maximum - range.minimum + 1;
                    })
                } while (continueWhile)
                return position
            })
    } else {
        return randomNumber(minimum, maximum)
    }
}
