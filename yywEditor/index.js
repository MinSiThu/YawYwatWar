let TextEditor = require('./Elements/TextEditor');
let {State} = require("./plugins");
let ContentInterfaces = require("./ContentInterfaces");

//SuperEditor is for better stylesheets Management
class YawYwatWarEditor{
    constructor(element){
        this.mainElement = element;
        this.textEditor = new TextEditor();
        this.mainElement.appendChild(this.textEditor.getHTMLElement())
        this.theme = "";
    }

    setUp({toolbarConfig,plugins,theme="primaryStyle"}){
        this.textEditor.setUp({toolbarConfig,theme})
        this.setPlguins(plugins)
        this.setUpTheme(theme);
    }

    setUpTheme(theme){
        this.theme = theme;
        this.mainElement.setAttribute('class',this.theme)
    }

    setPlguins(plugins){
       for(var prop in plugins){
           ContentInterfaces.setPlugin(prop,plugins[prop]);
       }
    }
}

if(window){
    window.YawYwatWarEditor = YawYwatWarEditor;
}

module.exports = YawYwatWarEditor;