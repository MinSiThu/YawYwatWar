let State = {
    imageFiles:[]
}

let imageExplorer = require("./imageExplorer")(State);

let Plugins = {
    imageExplorer,
    State,
}

if(window){
    window.Plugins = Plugins;
}

module.exports = Plugins;