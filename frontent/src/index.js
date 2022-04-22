import reactDom from "react-dom"
import App from "./App.jsx"
import "./main.scss"
import {BrowserRouter} from "react-router-dom"
import ContextProvider from "./context/langContext.js"

reactDom.createRoot(document.getElementById('root')).render(<ContextProvider><BrowserRouter><App/></BrowserRouter></ContextProvider>);