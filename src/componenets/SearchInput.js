import {useDispatch, useSelector} from "react-redux";
import {setQuery} from "../store";


function SearchInput() {
    const {query} = useSelector(state => state.search);
    const dispatch = useDispatch();
    const handleSearchChange = e => {
        dispatch(setQuery(e.target.value));
    };

    const handleSearchEnter = e => {
        if(e.key === 'Enter') {

        }
    };

    return(
        <div>
            <input value={query} onChange={handleSearchChange} onKeyDown={handleSearchEnter} />
        </div>
    );
}

export default SearchInput;