let TextEditor = require('./Elements/TextEditor');

//SuperEditor is for better stylesheets Management
class YawYwatWarEditor{
    constructor(element){
        this.mainElement = element;
        this.textEditor = new TextEditor();
        this.mainElement.appendChild(this.textEditor.getHTMLElement())
        this.theme = "";
    }

    setUp({toolbarConfig,theme="primaryStyle"}){
        this.textEditor.setUp({toolbarConfig,theme})
        this.setUpTheme(theme);
    }

    setUpTheme(theme){
        this.theme = theme;
        this.mainElement.setAttribute('class',this.theme)
    }
}

if(window){
    window.YawYwatWarEditor = YawYwatWarEditor;
}

module.exports = YawYwatWarEditor;