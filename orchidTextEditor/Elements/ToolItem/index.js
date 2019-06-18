let ContentTypes = require('../../ContentTypes');
let ContentInterfaces = require('../../ContentInterfaces');
let AbstractElement = require('../AbstractElement');
let Button = require('../Button');
let Selector = require('../Selector');

class ToolItem extends AbstractElement {

    static create(contentType){
        switch (contentType) {
            case ContentTypes.BOLD:
                return new Button(ContentInterfaces.BOLD)
                break;

            case ContentTypes.ITALIC:
                return new Button(ContentInterfaces.ITALIC)
                break;
            
            case ContentTypes.UNDERLINE:
                return new Button(ContentInterfaces.UNDERLINE)
                break;
        
            case ContentTypes.IMAGE:
                return new Button(ContentInterfaces.LINK)
                break;     
            
            case ContentTypes.LINK:
                return new Button(ContentInterfaces.IMAGE)
                break;
            
            case ContentTypes.HEADING:
                return new Selector(ContentInterfaces.HEADING)
                break;
                
            case ContentTypes.LEFT_ALIGN:
                return new Button(ContentInterfaces.LEFT_ALIGN)
                break;

            case ContentTypes.RIGHT_ALIGN:
                return new Button(ContentInterfaces.RIGHT_ALIGN)
                break;

            case ContentTypes.CENTER_ALIGN:
                return new Button(ContentInterfaces.CENTER_ALIGN)
                break;
           
            case ContentTypes.ORDERED_LIST:
                return new Button(ContentInterfaces.ORDERED_LIST)
                break;

            case ContentTypes.UNORDERED_LIST:
                return new Button(ContentInterfaces.UNORDERED_LIST)
                break;

            default:
                break;
        }
    }
}

module.exports = ToolItem;