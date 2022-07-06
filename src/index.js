import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { App } from "./components";




const root = ReactDOM.createRoot(document.getElementByID('app'))
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);