//content script
var clickedElement = null;

document.addEventListener("mousedown", function(event){
    //right click
    if(event.button === 2) { 
        clickedElement = event.target;
    }
}, true);

function getPath(element) {
    var path = [];
    $(element).parents().addBack().not('html').each(function() {
        var entry = this.tagName.toLowerCase();
        entry += ":nth-child("+($(this).index()+1)+")";
        path.push(entry);
    });
    return path;
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if(request === MESSAGES.GET_CONTEXT) {
        var path = getPath(clickedElement);
        var url = [location.protocol, '//', location.host, location.pathname].join('');
        sendResponse({url: url, selector: path.join(">")});
    }
});