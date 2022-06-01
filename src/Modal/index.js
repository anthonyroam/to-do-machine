import React from "react";
import ReactDOM from 'react-dom';

function Modal ({ children }) {
    return ReactDOM.createPortal(
        <div className="absolute top-0 h-screen w-full flex items-center justify-center bg-gray-700 bg-opacity-70">
            { children }
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };