function openFileExplorer(State) {
    return new Promise((resolve,reject)=>{
        let fileInput = document.createElement("input");
        fileInput.setAttribute("type","file");
        fileInput.click();
        fileInput.onchange = function(e){
            let file = this.files[0];
            State.imageFiles.push(file); //push plugins State Here
            let reader = new FileReader();
            reader.onload = function(e){
                resolve(e.target.result)
            }
            reader.readAsDataURL(file);
        }
    })  
}

module.exports = function(State){
    return async function(){
        let path = await openFileExplorer(State);    
        return path;
    }
}