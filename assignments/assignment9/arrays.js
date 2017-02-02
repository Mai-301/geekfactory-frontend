var sum = function (arr) {
    var sum = 0;
    if (Array.isArray(arr)) {
        arr.forEach(function (element) {
            sum += element
        });
        return sum;
    }
}
var odds = function (arr) {
    var oddArray = [];
    if (Array.isArray(arr)) {
        arr.forEach(function (element) {
            if (element % 2 !== 0)
                oddArray.push(element);
        });
        return oddArray;
    }
}

exports.sum = sum;
exports.odds = odds;
