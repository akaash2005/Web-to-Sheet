# 📝 Web-to-Sheet Chrome Extension

Save highlighted text from any webpage directly to a connected Google Sheet — with timestamp, page title, and URL — in one click.

## 🚀 Features

- ✅ Capture selected text
- ✅ Automatically grab the current timestamp
- ✅ Record the page title
- ✅ Save the page URL
- ✅ Send all data to a Google Sheet via Google Apps Script

---

## 📂 File Structure

Web-to-Sheet/
│
├── background.js # Core logic to capture text and send it to the sheet
├── manifest.json # Chrome extension manifest v3
└── README.md # This file

kotlin
Copy
Edit

---

## 🔧 Setup Instructions

### 1. **Set Up Google Sheet**

1. Create a Google Sheet with these columns:
   - Timestamp
   - Selected Text
   - Page Title
   - Page URL

2. Set Up the Extension
Clone/download this repo.

In background.js, replace:

js
Copy
Edit
const WEB_APP_URL = "YOUR_WEB_APP_URL_HERE";
Go to chrome://extensions/

Enable Developer Mode

Click Load unpacked

Select the extension folder.

✅ Usage
Highlight any text on a webpage.

Right-click > Save to Sheet

You’ll see an alert confirming it's saved.

Check your Google Sheet — the row will be added.

