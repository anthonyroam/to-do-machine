function EmptySearchResult ({ searchValue }) {
    return (
        <div className="py-2 px-4">
            <p className="text-Light-Grayish-Blue ">no hay resultado para {searchValue}</p>
        </div>
    );
};

export { EmptySearchResult };