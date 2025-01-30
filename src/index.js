import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRoute from "./route/app-route";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';
import { Provider } from 'react-redux';
import Store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={Store} >
        <RouterProvider router={appRoute} />
    </Provider>
)

