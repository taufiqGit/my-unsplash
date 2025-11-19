import React from 'react'
import { createRoot } from 'react-dom/client'
import App from "./app"
import { GlobalProvider } from "./context/GlobalState"

const container = document.getElementById("inti")
if (container) {
  const root = createRoot(container)
  root.render(
    <GlobalProvider>
      <App />
    </GlobalProvider>
  )
}