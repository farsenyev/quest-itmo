import "./index.css";

// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import bridge from "@vkontakte/vk-bridge";

import { AppConfig } from "./AppConfig";

bridge.send("VKWebAppInit");

createRoot(document.getElementById("root")!).render(<AppConfig />);
