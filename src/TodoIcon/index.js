import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const iconTypes = {
    "check": color => <FiCheck color={color} />,
    "delete": color => <FiX color={color} />,  
};

function TodoIcon ({ type, color = "gray", onClick}) {
    
    return (
        <span
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
};

export { TodoIcon }; 