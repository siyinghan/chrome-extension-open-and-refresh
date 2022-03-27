const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const text = document.querySelector("#text");

const baseURL = "https://s.weibo.com/weibo?q=";
const links = new Map();
// 龚俊代言
links.set(0, baseURL + "%E9%BE%9A%E4%BF%8A%E4%BB%A3%E8%A8%80");
// 龚俊坚持全开麦
links.set(
  1,
  baseURL + "%E9%BE%9A%E4%BF%8A%E5%9D%9A%E6%8C%81%E5%85%A8%E5%BC%80%E9%BA%A6"
);
// 龚俊粉丝
links.set(2, baseURL + "%E9%BE%9A%E4%BF%8A%E7%B2%89%E4%B8%9D");
// 龚俊壁纸
links.set(3, baseURL + "%E9%BE%9A%E4%BF%8A%E5%A3%81%E7%BA%B8");
// 龚俊温客行
links.set(4, baseURL + "%E9%BE%9A%E4%BF%8A%E6%B8%A9%E5%AE%A2%E8%A1%8C");
// 龚俊的浪漫非你茉属
links.set(
  5,
  baseURL +
    "%E9%BE%9A%E4%BF%8A%E7%9A%84%E6%B5%AA%E6%BC%AB%E9%9D%9E%E4%BD%A0%E8%8C%89%E5%B1%9E"
);
// 龚俊杂志
links.set(6, baseURL + "%E9%BE%9A%E4%BF%8A%E6%9D%82%E5%BF%97");
// 龚俊表情包
links.set(7, baseURL + "%E9%BE%9A%E4%BF%8A%E8%A1%A8%E6%83%85%E5%8C%85");
// 龚俊lv
links.set(8, baseURL + "%E9%BE%9A%E4%BF%8Alv");

let timer = null;

start.addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    text.innerHTML = "refreshing";

    // don't create new tabs if they're already there
    if (tabs.length === 1) {
      // create new tabs (in the same window) for each url but don't go there (active false)
      for (let i = 0; i < links.size; i++) {
        chrome.tabs.create({ url: links.get(i), active: false });
      }
    }
  });

  timer = setInterval(() => {
    // query all tabs in the current window
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      tabs.forEach((tab) => {
        // refresh each tab bypassing the cache
        chrome.tabs.reload(tab.id, { bypassCache: true });
        // go to the same url everytime
        // chrome.tabs.update(tab.id, { url: tab.url });
      });
    });
  }, 25000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
  text.innerHTML = "stop refreshing";
});
