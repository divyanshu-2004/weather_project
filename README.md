
---

```markdown
# 🌦 Weather Forecast Project

A simple and responsive **Weather Forecast Web App** built with modern web technologies that allows users to search current weather conditions for any city. The app fetches live weather data from a public weather API and displays temperature, humidity, wind speed, and more.

**Live Demo:** https://dpweatherapp2004.netlify.app/  

---

## 🔍 Features

✔️ Search weather by city name  
✔️ Displays current temperature, humidity, wind speed, weather conditions  
✔️ Clean and responsive UI  
✔️ Deployable as a static site  
✔️ Built using modern tooling with Vite  

---

## 🧠 Tech Stack

- **HTML** – Content structure  
- **CSS** – Styling and layout  
- **JavaScript** – Interactivity & API calls  
- **Vite** – Development tooling and bundler  
- **Weather API** – Fetches real-time weather data  

---

## 📦 Project Structure

```

weather_project/
├── public/                 # Static assets
│   └── index.html
├── src/                    # App source code
│   ├── main.js
│   └── styles.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

````

---

## 🚀 Getting Started

### 💻 Install and Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/divyanshu-2004/weather_project.git
````

2. **Navigate into the project directory**

   ```bash
   cd weather_project
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start local development server**

   ```bash
   npm run dev
   ```

5. Open the browser and go to `http://localhost:5173` (or the URL shown in your terminal)

---

## 🌐 API

This app uses a weather API to fetch live data. If it requires an API key:

1. Sign up for a free API key (e.g., OpenWeatherMap)
2. Create a `.env` file in the root
3. Add your key:

   ```env
   VITE_WEATHER_API_KEY=YOUR_API_KEY
   ```

> Adjust the `fetch` call in your JS to use this key.

---

## 📌 How It Works

1. User enters a city name in the search bar
2. App makes a request to the weather API
3. Fetches current weather data
4. Displays results — temperature, humidity, wind speed, and weather description

---

## 🛠️ Customization

You can improve this app by adding:

✔️ 7-day forecast
✔️ Geolocation support (detect user location)
✔️ Unit toggle (°C / °F)
✔️ Dark & light theme
✔️ Error messages on invalid city input

---

## 📁 Deployment

You can deploy this to **Netlify, GitHub Pages, Vercel**, or any static hosting:

Example for Netlify:

1. Push repository to GitHub
2. Connect repo on Netlify
3. Choose build settings (if using Vite)

   * Build command: `npm run build`
   * Publish directory: `dist`

---

## 🤝 Contribution

Feel free to open issues or submit pull requests!
Please follow basic guidelines: write clear commit messages and include meaningful improvements.

---

## 📜 License

Distributed under the **MIT License**.
See `LICENSE` for more information.

---

## 🙌 Acknowledgements

Inspired by weather app projects and tutorials showcasing real-time data from weather APIs.([github.com][1])

