
chrome.contextMenus.create({
  id: "Search_on_Naver_Maps",
  title: "Search on Naver Maps",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(
  function (info, tab) {
    var text = info.selectionText;
    text = encodeURIComponent(text);
    chrome.tabs.create({
      url: "https://map.naver.com/v5/search/" + text,
      active: true
    });
});
