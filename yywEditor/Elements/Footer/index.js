let AbstractElement = require('../AbstractElement');
let Typography = require('../Typography');
let Button = require('../Button');
let HTMLConvertor = require('../../ContentInterfaces/htmlConvertor');
let SingletonDOM = require('../../SingletonDOM');

class Footer extends AbstractElement{
    constructor(){
        super('footer');
        this.element.setAttribute('class',SingletonDOM.theme+"--footer")
    }

    addText(text){
        this.element.appendChild(text);
    }


    static createProductFooter(){
        let footer = new Footer();
        let productName = new Typography('©YawYwatWar');
        let htmlButton = new Button(HTMLConvertor.toHTML);
        footer.addText(productName.getTextNode());
        footer.add(htmlButton)
        return footer;
    }
}


module.exports = Footer;