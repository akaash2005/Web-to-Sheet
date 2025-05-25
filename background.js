const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz_PQ_QFkpQKlxzB5oNi2hEfBzK4--TURdsshH7NPD49sFnP-Qas7aaratUxNsev6XB/exec"; // 🔁 Replace with your actual script URL

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveToSheet",
    title: "Save to Sheet",
    contexts: ["selection"], // Only when text is selected
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveToSheet" && info.selectionText) {
    const payload = {
      text: info.selectionText,
      url: info.pageUrl,
    };

    fetch(WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(data => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => alert("✅ Highlight saved to Sheet!"),
        });
      })
      .catch(err => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => alert("❌ Error saving to Sheet."),
        });
        console.error("Error:", err);
      });
  }
});

