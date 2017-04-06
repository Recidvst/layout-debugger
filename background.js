chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'if (toggle == true) { revert(window); } else { highlighter(window); }'
  });

});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.toggle == true) {
      chrome.browserAction.setIcon ({
        path : "images/icon19darktick.png"
      });
    }
    else {
      chrome.browserAction.setIcon ({
        path : "images/icon19dark.png"
      });
    }
});
