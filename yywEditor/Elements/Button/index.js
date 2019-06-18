let AbstractElement = require('../AbstractElement');
//let KeyBoard = require('../../KeyBoard');

class Button extends AbstractElement{
    constructor(workingInterface){
        super('button');

        this.clickCounter = false;
        this.workingInterface = workingInterface;

        let eventHandler =(toolItem)=>{
           return function(e){
               /* toolItem.clickCounter = !toolItem.clickCounter;
                    if(toolItem.clickCounter == true && toolItem.workingInterface.toggle == true){
                        toolItem.element.setAttribute('class',"clicked")
                    }else if(toolItem.clickCounter == false && toolItem.workingInterface.toggle == true){
                        toolItem.element.setAttribute('class',"")
                    }*/
                toolItem.workingInterface.activate();
           }
        }

        //element events
        this.element.innerHTML = this.workingInterface.ICON;
        this.element.addEventListener('click',eventHandler(this))
      //  KeyBoard.add(this.workingInterface,eventHandler(this))
    }
}

module.exports = Button;