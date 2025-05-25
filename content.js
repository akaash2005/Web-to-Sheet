// content.js

// Optional: receives messages from background (e.g., for alerts)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showAlert") {
    alert(request.message);
    sendResponse({ status: "shown" });
  }
});
