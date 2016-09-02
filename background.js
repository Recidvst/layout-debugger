chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript({
    file: 'test.js'
  });

  chrome.tabs.executeScript({
    code: 'alert("part-two")'
  });

  chrome.tabs.executeScript({
    code: 'switchtrigger();'
  });

  chrome.tabs.executeScript({
    code: 'alert("part-three")'
  });

  chrome.tabs.executeScript({
    code: 'var iftest = 1'
  });

  chrome.tabs.executeScript({
    code: 'if (iftest == 1) { alert("if yes"); } else { alert("if no"); }'
  });

});
