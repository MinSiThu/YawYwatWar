let keyboardJS = require('keyboardjs')
const couplers = [];

module.exports.add = function(workingInterface,eventHandler){
    couplers.push({workingInterface,eventHandler});
    if(workingInterface.shortcutKey != undefined && workingInterface.shortcutKey != ""){
        keyboardJS.bind(workingInterface.shortcutKey, eventHandler);
    }
}