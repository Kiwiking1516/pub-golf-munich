import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

function setAppHeight() {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', setAppHeight);
setAppHeight();

createRoot(document.getElementById("root")!).render(<App />);
