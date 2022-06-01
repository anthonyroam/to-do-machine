function TodoFind ({ name, onClick }) {
    return (
        <a 
            className="hover:text-Bright-Blue transition-all"
            onClick={onClick}
        >
            {name}
        </a>
    );
}

export { TodoFind };