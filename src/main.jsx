import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Toaster
                position="bottom-center"
                toastOptions={{
                    style: { padding: "1rem" },
                    className: "my-toast",
                }}
            />
        </BrowserRouter>
    </React.StrictMode>
);
