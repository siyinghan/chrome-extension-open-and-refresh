const baseURL = "https://s.weibo.com/weibo?q=";

const urls = [
  baseURL + encodeURI("龚俊站姐"),
  baseURL + encodeURI("龚俊超话"),
  baseURL + encodeURI("龚俊工作室"),
  baseURL + encodeURI("龚俊代言"),
  baseURL + encodeURI("龚俊视频"),
  baseURL + encodeURI("龚俊资源"),
  baseURL + encodeURI("龚俊生图"),
  baseURL + encodeURI("龚俊粉丝"),
  baseURL + encodeURI("龚俊杀青"),
  baseURL + encodeURI("龚俊腹肌"),
  // baseURL + encodeURI("龚俊壁纸"),
  // baseURL + encodeURI("龚俊电视剧"),
  // baseURL + encodeURI("龚俊的浪漫非你茉属"),
  // baseURL + encodeURI("龚俊杂志"),
  // baseURL + encodeURI("龚俊后援会"),
  // baseURL + encodeURI("龚俊唱歌"),
  // baseURL + encodeURI("龚俊表情包"),
  // baseURL + encodeURI("龚俊新剧"),
  // baseURL + encodeURI("龚俊lv"),
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ urls });
});
