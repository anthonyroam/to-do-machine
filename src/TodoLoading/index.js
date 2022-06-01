function TodoLoading () {
    return (
        <div className="h-20 w-full flex items-center justify-between gap-4 px-4">
            <div 
                className="h-6 w-6 rounded-full bg-Very-Dark-Grayish-Blue animate-pulse"
            />
            <div
                className="h-3 w-auto flex-1 mx-auto rounded-md bg-Very-Dark-Grayish-Blue animate-pulse"
            />
            <div className="h-6 w-6 rounded-full bg-Very-Dark-Grayish-Blue animate-pulse" />
        </div>
    );
};

export { TodoLoading };