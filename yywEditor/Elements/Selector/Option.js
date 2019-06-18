let AbstractElement = require('../AbstractElement');

class Option extends AbstractElement{
    constructor(config){
        super('option');
        this.element.innerText = config.text;
        this.element.value = config.value;
    }
}

module.exports = Option;