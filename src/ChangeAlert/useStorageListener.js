import React from "react";

function useStorageListener (sincronize) {
    const [storageListener, setStorageListener] = React.useState(false);
    
    React.useEffect(() => {
        const onChange = (change) => {
            if (change.key === "TODOS_V1") {
                setStorageListener(true);
            }
        }
        
        window.addEventListener("storage", onChange)
    })

    const toggleShow = ()=> {
        sincronize();
        setStorageListener(false)
    }

    return {
        show: storageListener,
        toggleShow,
    };
    
};

export { useStorageListener };