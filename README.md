# YawYwatWar

```
npm i --save yawywatwar-editor
```

```html

<link rel="stylesheet" href="/yywEditor/stylesheets/TextEditor.css">

<div id="content">
            </div> 
<script src="../node_modules/yawywatwar-editor/index.js"><script>
```

```js
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
```

