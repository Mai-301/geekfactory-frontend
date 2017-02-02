var sum = function (arr) {
    let sum = 0;
    if (Array.isArray(arr)) {
        arr.forEach(function (element) {
            sum += element
        });
        return sum;
    }
}
var odds = function (arr) {
    let oddArray = [];
    if (Array.isArray(arr)) {
        arr.forEach(function (element) {
            if (element % 2 !== 0)
                oddArray.push(element);
        });
        return oddArray;
    }
}
var find = function (arr, predictionFn) {
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            if (predictionFn(arr[i])) {
                return arr[i];
            }
        }
    }
}

exports.sum = sum;
exports.odds = odds;
exports.find = find;

