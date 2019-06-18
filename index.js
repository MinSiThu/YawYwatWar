class TextEditor {
    constructor(selector){
        this.mainEl = document.querySelector(selector);
    }

    bold(){
        this.mainEl.focus();
        document.execCommand('bold',false);
    }

    italic(){
        this.mainEl.focus();
        document.execCommand('italic',false);
    }

    image(){
        let src = prompt('enter image url');
        document.execCommand('insertImage',false,src);
    }

    link(){
        let src = prompt('enter http url');
        document.execCommand('createLink',false,src);
    }

    setBold(){
        let boldBtn = document.createElement('button');
        boldBtn.innerText = 'Bold';
        this.mainEl.insertAdjacentElement('beforebegin',boldBtn)
        boldBtn.addEventListener('click',e=>{
            this['bold']()
        })
    }

    setLink(){
        let boldBtn = document.createElement('button');
        boldBtn.innerText = 'Link';
        this.mainEl.insertAdjacentElement('beforebegin',boldBtn)
        boldBtn.addEventListener('click',e=>{
            this['link']()
        })
    }

    setItalic(){}

    setImage(){}

    toolbars(array){
        array.forEach(command=>{
            switch(command){
                case 'bold':
                    this.setBold();
                break;

                case 'link':
                    this.setLink();
                break;

                case 'italic':
                    this.setItalic();
                break;

                case 'image':
                    this.setImage();
                break;

                default: break;
            }
        })
    }
}