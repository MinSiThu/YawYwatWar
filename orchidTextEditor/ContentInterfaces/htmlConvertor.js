let SingletonDOM = require('../SingletonDOM');

module.exports = {
    toHTML:{
        ICON:`<i class="fa fa-code"></i>`,
        toggle:true,
        activate(){
            SingletonDOM.setHTML();
        }
    }
}