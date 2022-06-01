function TodoContainer ({ children }) {
    return (
        <main className="h-screen w-full bg-Very-Dark-Blue bg-mobileDark bg-no-repeat bg-contain font-josefin">
            <section className="flex flex-col h-full w-5/6 mx-auto pt-16 gap-4">
                { children }
            </section>
        </main>
    );
};

export { TodoContainer };