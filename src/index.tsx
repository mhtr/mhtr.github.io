import React from "react";
import { createRoot } from "react-dom/client";
import './styles/style.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
