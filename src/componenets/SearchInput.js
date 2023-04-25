

function SearchInput({ searchQuery, onSearchChange }) {
    const handleSearchChange = e => {
        onSearchChange(e.target.value);
    };

    return(
        <div>
            <input value={searchQuery} onChange={handleSearchChange} />
        </div>
    );
}

export default SearchInput;