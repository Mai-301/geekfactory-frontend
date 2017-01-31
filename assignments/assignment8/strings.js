var lengthOfLastWord=function(str){
    var splittedString=[''];
    var i=splittedString.length;
    if(typeof str === 'string'){
        if(str.length==0)
          return 0;
        else 
         splittedString=str.split(' ');
         if(splittedString[splittedString.length-1].length > 0)
           return splittedString[splittedString.length-1].length;
         else
            while(splittedString[i].length == 0)
            {
                i--;
            }
            return splittedString[i].length;
    }
}
exports.lengthOfLastWord=lengthOfLastWord;
