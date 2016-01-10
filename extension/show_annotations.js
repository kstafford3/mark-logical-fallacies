function queryForAnnotations() {
    var url = [location.protocol, '//', location.host, location.pathname].join('');
    var params = { url: url };
    var getUrl = BASE_QUERY_URL+"?"+$.param(params);
    $.get(getUrl, function(annotations) {
        $.each(Object.keys(annotations), function(idx, selector) {
            var fallacies = annotations[selector];
            showAnnotation(selector, fallacies);
        });
    });
}

function showAnnotation(selector, fallacies) {
    var fallacyCollection = $("<span />", {
        class: "fallacies"
    });
    
    $.each(fallacies, function(i, fallacyKey) {
        fallacyCollection.append("<a class='fallacy-icon' data-key='"+fallacyKey+"' href='"+BASE_FALLACY_URL+fallacyKey+"'/>");
        if(i < fallacies.length-1) {
            fallacyCollection.append(", ");
        }
    });
    
    fallacyCollection.prepend(" [");
    fallacyCollection.append("]");
    
    $(selector).append(fallacyCollection);
}

queryForAnnotations();

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if(request === MESSAGES.REFRESH_FALLACIES) {
        $(".fallacies").remove();
        queryForAnnotations();
    }
});