import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from "recoil"
import {ToastContainer , toast, Slide} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <React.StrictMode>
            <ToastContainer 
                autoClose={2000}
                limit={1}
                position='top-center'
                transition={Slide}
            />
            <App />
        </React.StrictMode>
    </RecoilRoot>
)
