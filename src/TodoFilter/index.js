function TodoFilter({ children }) {
    return (
        <div className="w-full h-auto py-4 flex items-center justify-center gap-4 rounded-md bg-Very-Dark-Desaturated-Blue text-Light-Grayish-Blue font-semibold  ">
            { children }
        </div>
    );
};

export { TodoFilter };