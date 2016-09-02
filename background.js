chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript({
    file: 'test.js'
  });

  chrome.tabs.executeScript({
    code: 'alert("part-two")'
  });

  chrome.tabs.executeScript({
    code: 'var iconOn;'
  });

  chrome.tabs.executeScript({
    code: 'if (iconOn == true) { alert("if on"); revert(window); } else { alert("if off"); highlighter(window); }'
  });

  chrome.tabs.executeScript({
    code: 'alert("part-three")'
  });

});



(function() {
    if (window.hasRun) return;
    window.hasRun = true;
    // Rest of code
})();
