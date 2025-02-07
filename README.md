# 📊 Data Visualization Dashboard

## 🚀 Project Overview
This project is a **React-based data visualization dashboard** that displays various user activity metrics using **Recharts**. It features modular styling with **SCSS modules** and centralized configuration for easy maintainability.

## 📂 Project Structure
```
───assets
├───components
│   ├───Header
│   ├───LeftBar
│   ├───MainContent
│   │   ├───KeyDataSidebar  # Right sidebar with key data
│   │   └───UserCharts
│   │       ├───ActivityChart
│   │       ├───PerformanceChart
│   │       ├───ScoreChart
│   │       └───SessionChart
│   └───WorkInProgress
├───config
├───hooks
├───pages
│   ├───Community
│   ├───Home
│   ├───Profile
│   └───Settings
├───router
├───services
├───styles
└───utils
```

## 🛠️ Features
✅ **Modular Configuration** - Centralized settings for colors, API, charts, and translations.  
✅ **SCSS Modules & Variables** - Component-level styles with reusable global variables.  
✅ **Recharts Integration** - Displays user activity and performance metrics.  
✅ **Theming Support** - Colors are managed via a dedicated `COLORS` config file.  
✅ **Clean & Maintainable Code** - Well-structured components with reusable styles.  


## 🔗 Configuration
Modify settings in the `/config` directory:
- **API Base URL** → `config/api.js`
- **Chart Dimensions** → `config/charts.js`
- **Colors** → `config/colors.js`
- **Labels & Translations** → `config/translations.js`

## 🎨 Styling
This project uses **SCSS modules** for component-level styling. Global styles and design variables (colors, breakpoints, font sizes) are stored in `styles/variables.scss` for consistency and easy customization.

## 📈 Charts & Data Visualization
Uses **Recharts** for rendering data-driven charts:
- **ActivityChart**: Displays user activity trends.
- **ScoreChart**: Shows user performance score.
- **PerformanceChart**: Visualizes user performance metrics.
- **SessionChart**: Displays weekly session length trends.

## 📜 License
MIT License. See [LICENSE](LICENSE) for details.

---
✨ *Built with React & Recharts* ✨

In case of errors "dataNotFound" consider removing all localstorage calls
and use instead Constants or manage issue preventing DOM render before loading data from localstorage