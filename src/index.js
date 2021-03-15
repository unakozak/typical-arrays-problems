exports.min = function min(array) {
    if (array === undefined || array[0] === undefined) return 0;
    else
        return array.sort(function sub(a, b) {
            return a - b;
        })[0];
};

exports.max = function max(array) {
    if (array === undefined || array[0] === undefined) return 0;
    else
        return array.sort(function sub(a, b) {
            return a - b;
        })[array.length - 1];
};

exports.avg = function avg(array) {
    if (array === undefined || array[0] === undefined) return 0;
    else return array.reduce((acc, a) => acc + a) / array.length;
};
