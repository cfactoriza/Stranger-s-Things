import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from "./components";

//TESTING PUSH REQUESTS


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);