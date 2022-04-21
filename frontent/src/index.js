import reactDom from "react-dom"
import App from "./App.jsx"
import "./main.scss"
import {BrowserRouter} from "react-router-dom"

reactDom.createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);