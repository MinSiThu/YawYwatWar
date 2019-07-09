let ToolBar  = require('../ToolBar');
let Footer = require('../Footer');
let AbstractElement = require('../AbstractElement');
let SingletonDOM = require('../../SingletonDOM');

class TextEditor extends AbstractElement{
    constructor(){
        super('div');
        this.theme = "";
        this.element.setAttribute('contenteditable',true);
        SingletonDOM.setDOM(this.element);
    }

    setUp({toolbarConfig,theme="primaryStyle"}){
        this.setUpTheme(theme)
        this.setUpToolBar(toolbarConfig)
        this.setUpFooter();
    }

    setUpToolBar(toolbarConfig){
        let toolBar = new ToolBar(this.theme);
        toolBar.setConfig(toolbarConfig);
        this.element.insertAdjacentElement('beforeBegin',toolBar.getHTMLElement())
    }

    setUpFooter(){
        let footer = Footer.createProductFooter();
        this.element.insertAdjacentElement('afterend',footer.getHTMLElement());
    }

    setUpTheme(theme){
        this.theme = theme;
        SingletonDOM.setTheme(this.theme);
        this.element.classList.add(theme+"--textEditor")
    }
}

module.exports = TextEditor;

