let AbstractElement = require('../AbstractElement');
let Option = require('./Option');

class Selector extends AbstractElement{
    constructor(workingInterface){
        super('select');
        this.workingInterface = workingInterface;
        
        //header element
        let header = document.createElement('option');
        header.innerHTML = workingInterface.ICON;
        header.selected = true;
        this.element.appendChild(header);

        workingInterface.options.forEach(optionConfig=>{
            let option = new Option(optionConfig);
            this.add(option)
        })

        this.element.addEventListener("change",e=>{
            workingInterface.activate(e.target.value);
            this.element.selectedIndex=0;
        })
    }
    
}

module.exports = Selector;