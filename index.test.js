function bootstrap(){
    let txeditor = new SuperEditor(document.getElementById('content'))
    txeditor.setUp({
        toolbarConfig:["bold","italic","underline","link",
                        "image","heading",
                        "left-align","right-align","center-align",
                        "ordered-list","unordered-list",
                    ]
    })
}

bootstrap()