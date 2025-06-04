const sumAll = function(x, y) {
    let sum = 0;

    if (x < 0 || y < 0) return 'ERROR';
    if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';

    let large = Math.max(x, y);
    let small = Math.min(x, y);
    for (let i = small; i <= large; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
