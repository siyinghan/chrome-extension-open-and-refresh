const baseURL = "https://s.weibo.com/weibo?q=";

const urls = [
  baseURL + encodeURI("龚俊"),
  baseURL + encodeURI("龚俊杂志"),
  baseURL + encodeURI("龚俊代言"),
  baseURL + encodeURI("龚俊商务"),
  baseURL + encodeURI("龚俊直播"),
  aseURL + encodeURI("龚俊粉丝"),
  aseURL + encodeURI("龚俊资源"),
  baseURL + encodeURI("龚俊工作室"),
  baseURL + encodeURI("龚俊壁纸"),
  baseURL + encodeURI("龚俊 狐妖小红娘月红篇"),
  baseURL + encodeURI("龚俊徐斯"),
  baseURL + encodeURI("龚俊我要逆风去"),
  baseURL + encodeURI("龚俊韩烨"),
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ urls });
});
