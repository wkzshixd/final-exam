import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Cars from "./pages/Cars";
import store from './store'
import {Provider} from 'react-redux'
import Car from "./pages/Car";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },

    {
        path: "/cars",
        element: <Cars/>,
        children: [
            {
                path: ":carId",
                element: <Car/>,
            }
        ]
    }]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </Provider>,
);
