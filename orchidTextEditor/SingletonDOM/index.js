

class SingletonDOM{
    static setDOM(dom){
        SingletonDOM.element = dom;   
    }

    static setTheme(theme){
        SingletonDOM.theme = theme;
    }

    static getHTML(){
        return SingletonDOM.element.innerHTML;
    }

    static setHTML(){
        SingletonDOM.element.innerText = SingletonDOM.element.innerHTML;
    }

    static setText(){
        SingletonDOM.element.innerHTML = SingletonDOM.element.innerText;
    }
}

module.exports = SingletonDOM;
