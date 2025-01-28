import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { SettingProvider } from "./contexts/SettingContext";
import { DataProvider } from "./contexts/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <SettingProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </SettingProvider>
  </Router>
);
