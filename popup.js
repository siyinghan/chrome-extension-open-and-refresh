const refreshInteval = 25;

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const clear = document.querySelector("#clear");
const text = document.querySelector("#text");

let usedURLs = null;
chrome.storage.sync.get("urls", async ({ urls }) => {
  usedURLs = await urls;
});

let timer = null;
start.addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    // text.innerHTML = "refreshing";
    // don't create new tabs if they're already there
    if (tabs.length === 1) {
      // create new tabs (in the same window) for each url but don't go there (active false)
      for (let i = 0; i < usedURLs.length; i++) {
        chrome.tabs.create({ url: usedURLs[i], active: false });
      }
    }
  });

  timer = setInterval(() => {
    // query all tabs in the current window
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      tabs.forEach((tab) => {
        // refresh each tab bypassing the cache
        chrome.tabs.reload(tab.id, { bypassCache: true });
      });
    });
    // 倒计时
    let time = refreshInteval;
    const countdown = setInterval(() => {
      if (time === 0) {
        clearInterval(countdown);
        time = refreshInteval;
      } else {
        text.innerHTML = "left " + (time - 1);
        time--;
      }
    }, 1000);
  }, refreshInteval * 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
  text.innerHTML = "stop refreshing";
});

// remove all searching tabs
clear.addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    for (let i = 1; i < tabs.length; i++) {
      chrome.tabs.remove(tabs[i].id);
    }
  });
});
