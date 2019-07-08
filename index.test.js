function bootstrap(){
    let txeditor = new YawYwatWarEditor(document.getElementById('content'))
    txeditor.setUp({
        toolbarConfig:["bold","italic","underline","link",
                        "image","heading",
                        "left-align","right-align","center-align",
                        "ordered-list","unordered-list",
                    ],
        plugins: {
            IMAGE:Plugins.imageExplorer,
        }
    })
}

bootstrap()