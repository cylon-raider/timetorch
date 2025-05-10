# 🕯️ TimeTorch

**TimeTorch** is a minimalist, transparent, draggable desktop overlay app built using **Electron** and **React**. Designed to float above all windows, it provides a persistent productivity tool right on your desktop.

---

## 📦 Features

- 🔲 Transparent, frameless always-on-top window
- ↕️ Draggable UI powered by `react-draggable`
- 🧱 Built with React for flexibility and ease of development
- ⚡ Integrated build process for Electron + React
- 💅 HTML beautification for clean build outputs

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/timetorch.git
cd timetorch

Install both root-level and UI-level dependencies:
# Root (Electron and scripts)
npm install

# UI (React and frontend libraries)
cd ui
npm install
cd ..

Build the React UI and launch Electron:
npm run start-electron


timetorch/
├── main.js                 # Electron main process
├── preload.js             # (Optional) Electron preload script
├── package.json           # Root scripts (Electron)
├── ui/
│   ├── src/               # React source files
│   ├── public/            # Static assets
│   ├── build/             # Production build (auto-generated)
│   ├── package.json       # React app config
│   └── craco.config.js    # (Optional) CRACO customization


🛠️ Scripts
Root package.json
npm run start-electron: Build React app, then start Electron

UI package.json
npm start: Start React dev server (for UI testing)

npm run build: Build production-ready React app and beautify HTML

npm run beautify-html: Run HTML beautifier on build/index.html

⚠️ Notes
Make sure Electron is installed globally or use npx electron .

App defaults to launching in the lower-right corner of the primary display

The window is transparent and frameless by design; use your UI elements to confirm rendering

📃 License
MIT – do what you want with it, but a mention is appreciated.

👤 Author
Built with 💻 by Chris Markel


---

Let me know if you'd like help auto-generating this file or adjusting it with your GitHub username and name.
