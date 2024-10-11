import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {AppConfig} from "./AppConfig";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <AppConfig />
  // </StrictMode>,
)
