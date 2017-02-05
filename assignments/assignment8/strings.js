// var lengthOfLastWord = function (str) {
//     var splittedString = [''];
//     var i = splittedString.length;
//     if (typeof str === 'string') {
//         //return last word length "0" if the input is an empty string
//         if (str.length == 0)
//             return 0;
//         else {
//             splittedString = str.split(' ');
//             //return the last word length if there is no space after it
//             if (splittedString[splittedString.length - 1].length > 0)
//                 return splittedString[splittedString.length - 1].length;
//             else
//                 //else, loop from the end of the string until finding the last word
//                 while (splittedString[i].length == 0) {
//                     i--;
//                 }
//             return splittedString[i].length;
//         }

//     }
// }

var lengthOfLastWord = function (str) {
    var i = str.length-1;
    var lastindex=0;
    if (typeof str === 'string') {
        //return last word length "0" if the input is an empty string
        if (str.length == 0)
            return 0;
        else {
            //loop from the end of the string till find a letter
            while(str.charAt(i)==' ')
                i--;
             //store the last index of the last word/letter  
            lastindex=i;
            //loop till the start index of the last word/letter    
            while(str.charAt(i)!=' ')
                i--;
            return lastindex-i;    
        }

    }
}
exports.lengthOfLastWord = lengthOfLastWord;
