var lengthOfLastWord=function(str){
    var splittedString=[''];
    var i=splittedString.length;
    if(typeof str === 'string'){
        //return last word length of "0" if an empty string
        if(str.length==0)
          return 0;
        else 
         splittedString=str.split(' ');
         //return the last word length if there is no space after it
         if(splittedString[splittedString.length-1].length > 0)
           return splittedString[splittedString.length-1].length;
         else
         //else, loop from the end of the string until finding the last word
            while(splittedString[i].length == 0)
            {
                i--;
            }
            return splittedString[i].length;
    }
}
exports.lengthOfLastWord=lengthOfLastWord;
