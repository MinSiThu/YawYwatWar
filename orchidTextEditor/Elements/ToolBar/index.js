let ToolItem = require('../ToolItem');
let AbstractElement = require('../AbstractElement');

class ToolBar extends AbstractElement {
    constructor(theme){
        super('div');
        this.element.setAttribute('class',theme+"--toolbar");
    }

    setConfig(configs){
        configs.forEach(config=>{
            let toolItem = ToolItem.create(config);
            this.add(toolItem);
        })
    }
}

module.exports = ToolBar;