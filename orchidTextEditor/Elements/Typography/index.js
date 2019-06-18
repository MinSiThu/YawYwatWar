class Typography{
    constructor(text){
        this.value = text;
        this.node = document.createTextNode(this.value);
    }

    getTextNode(){
        return this.node;
    }
}

module.exports = Typography;