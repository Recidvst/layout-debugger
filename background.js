chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript({
    file: 'highlight.js'
  });

  chrome.tabs.executeScript({
    code: 'var iconOn;'
  });

  chrome.tabs.executeScript({
    code: 'if (iconOn == true) { revert(window); } else { highlighter(window); }'
  });

});

var toggle;

chrome.browserAction.onClicked.addListener(function (tab) {

  if (toggle == "on") {
      chrome.browserAction.setIcon ({
        path : "images/icon19darktick.png"
      });
      toggle = "off";
  }
  else {
      chrome.browserAction.setIcon({
      path : "images/icon19dark.png"
      });
      toggle = "on";
  }

});
