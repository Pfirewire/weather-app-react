

function SearchInput({ searchQuery, onSearchChange, onEnter }) {
    const handleSearchChange = e => {
        onSearchChange(e.target.value);
    };

    const handleSearchEnter = e => {
        if(e.key === 'Enter') {
            onEnter();
        }
    };

    return(
        <div>
            <input value={searchQuery} onChange={handleSearchChange} onKeyDown={handleSearchEnter} />
        </div>
    );
}

export default SearchInput;