
function TodoList(props) {
    console.log(props.searchedTodos.length)
    return (
        <section
            className="h-auto w-full bg-Very-Dark-Desaturated-Blue rounded-md shadow-lg"
        >
            {props.error && props.onError()} 
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {!!props.totalTodos && !props.searchedTodos.length && props.onEmptySearchResult()}
            <ul>
                {!props.loading && props.searchedTodos.map(todo => props.render(todo))} 
            </ul>
        </section>
    );
};

export { TodoList };