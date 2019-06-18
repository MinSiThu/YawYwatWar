class AbstractElement{
    constructor(elementName){
        this.element = document.createElement(elementName);
    }

    getHTMLElement(){
        return this.element;
    }

    add(Element){
        this.element.appendChild(Element.getHTMLElement());
    }
}

module.exports = AbstractElement;