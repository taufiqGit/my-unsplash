import React from 'react'
import ReactDOM from 'react-dom'
import App from "./app"
import { GlobalProvider } from "./context/GlobalState"

ReactDOM.render(
    <GlobalProvider>
        <App/>
    </GlobalProvider>, 
    document.getElementById("inti"))