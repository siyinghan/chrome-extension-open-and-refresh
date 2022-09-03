const baseURL = "https://s.weibo.com/weibo?q=";

const urls = [
  baseURL + encodeURI("龚俊 狐妖"),
  baseURL + encodeURI("龚俊综艺"),
  baseURL + encodeURI("龚俊代言"),
  baseURL + encodeURI("龚俊粉丝"),
  baseURL + encodeURI("龚俊超话"),
  baseURL + encodeURI("龚俊工作室"),
  baseURL + encodeURI("龚俊站姐"),
  baseURL + encodeURI("龚俊新剧"),
  baseURL + encodeURI("龚俊壁纸"),
  baseURL + encodeURI("龚俊怎么了"),
  baseURL + encodeURI("龚俊进组"),
  baseURL + encodeURI("龚俊北京"),
  baseURL + encodeURI("龚俊代言"),
  baseURL + encodeURI("龚俊杂志"),
  baseURL + encodeURI("龚俊ins"),
  baseURL + encodeURI("龚俊腹肌"),
  baseURL + encodeURI("龚俊商务"),
  baseURL + encodeURI("龚俊徐斯"),
  baseURL + encodeURI("龚俊电视剧"),
  baseURL + encodeURI("龚俊韩烨"),
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ urls });
});
