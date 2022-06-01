import React from "react";

function TodoCounter({ completedTodos, totalTodos, loading }) {
    if (loading) {
        return <p className={`text-Light-Grayish-Blue text-3xl tracking-[.25em]`}>...</p>
    } else {
        return <h2 
            className={`text-Light-Grayish-Blue`}
        >Has completado <span className="font-bold text-Light-Grayish-Blue-hover">{completedTodos}</span> de <span className="font-bold text-Light-Grayish-Blue-hover">{totalTodos}</span> ToDos</h2>
    }
};

export { TodoCounter };