function TodoError ({ error }) {
    return (
        <div>
            <p
                className="flex items-center justify-center h-96 w-full px-4 text-Light-Grayish-Blue text-2xl text-center font-bold "
            >Ups...Something went wrong!</p>
        </div>
    );
}

export { TodoError };