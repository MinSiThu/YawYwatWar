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
        footer.addText(productName.getTextNode());
        return footer;
    }
}


module.exports = Footer;