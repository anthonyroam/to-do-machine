import React from "react";

function TodoHeader ({ children, loading }) {
    return (
        <header className="flex flex-col gap-2">
            { 
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading }))
            }
        </header>
    );
};

export { TodoHeader };