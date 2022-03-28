const baseURL = "https://s.weibo.com/weibo?q=";

const urls = [
  baseURL + encodeURI("龚俊超话"),
  baseURL + encodeURI("龚俊电视剧"),
  baseURL + encodeURI("龚俊视频"),
  baseURL + encodeURI("龚俊lv"),
  baseURL + encodeURI("龚俊的浪漫非你茉属"),
  baseURL + encodeURI("龚俊温客行"),
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ urls });
});
