chrome.contextMenus.create({
    id: "fallacies",
    title: "Mark Logical Fallacy",
    contexts: [ "selection" ],
});

$.each(FALLACIES, function(fallacyKey) {
    var fallacy = FALLACIES[fallacyKey];
    chrome.contextMenus.create({
        id: fallacyKey,
        title: fallacy,
        contexts: [ "selection" ],
        parentId: "fallacies",
        onclick: function(info, tab) {
            chrome.tabs.sendMessage(tab.id, MESSAGES.GET_CONTEXT, function(context) {
                if(context) {
                    var params = {
                        url: context.url,
                        selector: context.selector,
                        content: fallacyKey
                    };
                    
                    $.post(BASE_POST_URL, params).done(function() {
                        chrome.tabs.sendMessage(tab.id, "refreshFallacies");
                    });
                }
            });
        }
    });
});