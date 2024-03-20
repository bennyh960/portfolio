import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const rootElement = document.querySelector("#root");
createRoot(rootElement).render(<App />);
