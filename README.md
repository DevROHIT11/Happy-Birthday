#The site live at 
https://devrohit11.github.io/Happy-Birthday/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


### 🛠️ Step-by-Step Instructions

#### 1. **Install `gh-pages` as a dev dependency**

npm install --save-dev gh-pages


#### 2.**Update vite.config.js**

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Happy-Birthday', // 👈 required for GitHub Pages
})

#### 3.**Add homepage to package.json**

"homepage": "https://devrohit11.github.io/Happy-Birthday/"

#### 4 .**Add deploy scripts to package.json**

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

#### 5. ** Use HashRouter Instead of BrowserRouter**

import { HashRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);

#### 6. **npm run build**

npm run build

#### 7. **Deploy to GitHub Pages**

npm run deploy
