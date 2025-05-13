import { useState } from "react"
import searchIcon from '../../img/search.svg'
import { SearchContainer, SearchInput, SubmitBtn } from "./styles";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/slices/searchSlice";

const SearchBar = () => {
    const [searchTerm, setTerm] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => { // previene el comportamiento por default del formulario y le da al onSearch el termino buscado
        console.log("recibido: ", searchTerm)
        e.preventDefault();
        dispatch(setSearchTerm(searchTerm));
    };

    return (
        <SearchContainer onSubmit={handleSubmit} >
            <SearchInput 
                type="text"
                placeholder="Buscar artista"
                value={searchTerm}
                onChange={(e) => setTerm(e.target.value)}
            />
            <SubmitBtn type="submit" className="search-button" >
                <img src={searchIcon} alt="buscar" />
            </SubmitBtn>
        </SearchContainer>
    )
    
}

export default SearchBar;