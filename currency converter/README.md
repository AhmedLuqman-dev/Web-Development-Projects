🌐 Currency Converter Web App

A real-time currency converter web application that allows users to convert values between global currencies. It dynamically fetches exchange rates and updates country flags, background colors, and more for an interactive user experience.

---
🚀 Features

- 🔁 Real-time Exchange Rates:**  
  Fetches the latest currency conversion rates using the [Open Exchange Rates API](https://open.er-api.com/).

- 🏳️ Dynamic Country Flags:**  
  Flags are updated based on selected currencies using [FlagsAPI](https://flagsapi.com/).

- 🔄 Currency Swapping:**  
  Swap the "From" and "To" currencies instantly with a clickable icon.

- 🌍 Color-Changing UI:**  
  The background color updates based on the selected target currency, defined in `countryColors.js`.

- 📂 Dropdowns with Country Codes:**  
  Currency dropdowns are auto-populated using a mapping from `countryList.js`.

- 🖥️ Responsive Design:**  
  Compatible with various devices, including mobile and desktop.

- 👤 Social Links Slider:**  
  Includes a slider with links to your:
  - GitHub
  - Portfolio
  - LinkedIn

---

📁 Folder Structure

currency_converter_project/
├── index.html             # Main HTML file
├── styles.css             # Main styling
├── js/
│   ├── app.js             # Core logic (fetching rates, events, flags, colors)
│   ├── countryList.js     # Currency → Country code map
│   └── countryColors.js   # Currency → Background color map
