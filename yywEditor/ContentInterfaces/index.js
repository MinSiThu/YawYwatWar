let SingletonDOM = require('../SingletonDOM');

const ContentInterfaces = {
    BOLD:{
        ICON:"<b>B</b>",
        shortcutKey:"ctrl+b",
        toggle:true,
        state: () => document.queryCommandState('bold'),
        activate:()=>{
            SingletonDOM.element.focus();
            document.execCommand('bold',false);
        }
    },
    ITALIC:{
        ICON:"<i>i</i>",
        shortcutKey:"ctrl+i",
        toggle:true,
        state: () => document.queryCommandState('italic'),
        activate(){
            SingletonDOM.element.focus();
            document.execCommand('italic',false);
        }
    },
    UNDERLINE:{
        ICON:"<u>U</u>",
        shortcutKey:"ctrl+u",
        toggle:true,
        state: () => document.queryCommandState('underline'),
        activate(){
            SingletonDOM.element.focus();
            document.execCommand('underline',false);
        }
    },
    LEFT_ALIGN:{
        ICON:`<i class="fa fa-align-left"></i>`,
        shortcutKey:"",
        toggle:true,
        state: () => document.queryCommandState('justifyleft'),
        activate(){
            SingletonDOM.element.focus();
            document.execCommand('justifyleft',false);
        }
    },
    RIGHT_ALIGN:{
        ICON:`<i class="fa fa-align-right"></i>`,
        shortcutKey:"",
        toggle:true,
        state: () => document.queryCommandState('justifyright'),
        activate(){
            SingletonDOM.element.focus();
            document.execCommand('justifyright',false);
        }
    },
    CENTER_ALIGN:{
        ICON:`<i class="fa fa-align-center"></i>`,
        shortcutKey:"",
        toggle:true,
        state: () => document.queryCommandState('justifycenter'),
        activate(){
            SingletonDOM.element.focus();
            document.execCommand('justifycenter',false);
        }
    },
    ORDERED_LIST:{
        ICON:`<i class="fa fa-list-ol"></i>`,
        shortcutKey:"",
        toggle:true,
        activate(){
            SingletonDOM.element.focus();
            document.execCommand('insertorderedlist',false);
        }
    },
    UNORDERED_LIST:{
        ICON:`<i class="fa fa-list-ul"></i>`,
        shortcutKey:"",
        toggle:true,
        activate(){
            SingletonDOM.element.focus();
            document.execCommand('insertunorderedlist',false);
        }
    },
    HEADING:{
        ICON:`<i class="fas fa-user">H</i>`,
        toggle:false,
        options:[
            {
                "text":"Main-Heading",
                "value":"h1"
            },
            {
                "text":"Sub-Heading",
                "value":"h4"
            }
        ],
        activate(value){
            SingletonDOM.element.focus();
            document.execCommand('formatblock',false,value)
        }
    },
    LINK:{
        ICON:`<i class="fa fa-link"></i>`,
        toggle:false,
        activate(){
            SingletonDOM.element.focus();
            let src = prompt('Enter HTTP URL!')
            if(src != null){
                document.execCommand('createLink',false,src);
            }
        }
    },
    IMAGE:{
        ICON:`<i class="fa fa-image"></i>`,
        toggle:false,
        async getInput(){
            return prompt('Enter Image URL!');
        },
        async activate(){
            SingletonDOM.element.focus();
            let src = await this.getInput();
            if(src != null){
                document.execCommand('insertImage',false,src);
            }
        }
    },
}

ContentInterfaces.setPlugin = function(interfaceName,cb){

    switch (interfaceName){
        case "IMAGE":
            ContentInterfaces["IMAGE"].getInput = cb;
        break;
    }
}

module.exports = ContentInterfaces;