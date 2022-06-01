function Button ({ type, onClick, name, className }) {
    return (
        <button 
            className={`w-32 py-2 px-4 rounded-md ${className}`}
            type={type}
            onClick={onClick}
        >
            {name}
        </button>
    );
};

export { Button };