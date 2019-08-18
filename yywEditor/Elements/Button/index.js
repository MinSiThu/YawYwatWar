let AbstractElement = require('../AbstractElement');
let SingletonDOM = require("../../SingletonDOM");
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
                if(toolItem.workingInterface.state){
                    this.classList[toolItem.workingInterface.state()?"add":"remove"]("clicked");
                }
           }
        }

        SingletonDOM.getDOM().addEventListener("mouseup",()=>{
            if(this.workingInterface.state){
                this.element.classList[this.workingInterface.state()?"add":"remove"]("clicked");
            }
        })

        SingletonDOM.getDOM().addEventListener("keyup",()=>{
            if(this.workingInterface.state){
                this.element.classList[this.workingInterface.state()?"add":"remove"]("clicked");
            }
        })

        //element events
        this.element.innerHTML = this.workingInterface.ICON;
        this.element.addEventListener('click',eventHandler(this))
      //  KeyBoard.add(this.workingInterface,eventHandler(this))
    }
}

module.exports = Button;