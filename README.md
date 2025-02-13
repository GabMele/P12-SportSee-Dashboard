
# 📊 Data Visualization Dashboard

## 🚀 Project Overview
This project is a **React-based data visualization dashboard** that displays various user activity metrics using **Recharts**. It features modular styling with **SCSS modules** and centralized configuration for easy maintainability. The app supports flexible routing, including Dashboard rendering accessing userId via local storage or via URL parameter for enhanced usability.

## 📂 Project Structure
```
───assets
├───components
│   ├───ErrorPage
│   ├───Header
│   ├───LeftBar
│   ├───MainContent
│   │   ├───KeyDataSidebar  # Right sidebar with key data
│   │   └───UserCharts
│   │       ├───ActivityChart
│   │       ├───PerformanceChart
│   │       ├───ScoreChart
│   │       └───SessionChart
│   ├───UserDashboardLayout  # Layout for the user dashboard
│   └───WorkInProgress
├───config
├───data
├───hooks
├───pages
│   ├───Community
│   ├───Home
│   ├───Profile
│   ├───Settings
│   └───UserDashboard
├───router
├───services
├───styles
└───utils
```

## 🛠️ Features
✅ **Modular Configuration** - Centralized settings for colors, API, charts, and translations.  
✅ **SCSS Modules & Variables** - Component-level styles with reusable global variables.  
✅ **Recharts Integration** - Displays user activity and performance metrics.  
✅ **Theming Support** - Colors are managed via CSS variables. 
✅ **Flexible Dashboard Access** - Access the userId via local storage or URL parameters (`/user/:userId`).  
✅ **Clean & Maintainable Code** - Well-structured components with reusable styles.  

## 🔗 Configuration
Modify settings in the `/config` directory:
- **API Base URL** → `config/api.js`
- **Chart Dimensions** → `config/charts.js`
- **Colors** → `config/colors.js` and `@/style/variables.scss`
- **Labels & Translations** → `config/translations.js`
- **Data Source (to switch to mock data)**  → `config/dataSource.js`

## 🎨 Styling
This project uses **SCSS modules** for component-level styling and global design variables (colors, breakpoints, font sizes)

## 📈 Charts & Data Visualization
Uses **Recharts** for rendering data-driven charts:
- **ActivityChart**: Displays user activity trends.
- **ScoreChart**: Shows user score.
- **PerformanceChart**: Visualizes user performance metrics.
- **SessionChart**: Displays weekly session length trends.

## 🚦 Dashboard Access  
- **Via Local Storage**: The Dashboard can be accessed using a `userId` stored in `localStorage`, with a fallback value in the configuration file `config/dataSource.js`.  
- **Via URL Parameter**: The Dashboard can also be accessed directly using the URL format `/user/:userId` (e.g., `/user/12`).

## 📜 License
MIT License. See [LICENSE](LICENSE) for details.

---

✨ *Built with React & Recharts* ✨

### Troubleshooting
In case of "dataNotFound" errors, consider removing all `localStorage` calls and instead use constants or ensure the DOM doesn't render until data is loaded.

