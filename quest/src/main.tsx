import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppConfig } from "./AppConfig";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppConfig />
    </StrictMode>,
);
