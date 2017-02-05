var saveForLater=function(name){
    return function(){
        return name;
    };
}
var executeLater=function(predictionFn){
    return predictionFn;
}
exports.saveForLater=saveForLater;
exports.executeLater=executeLater;