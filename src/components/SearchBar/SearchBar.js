import { useState } from "react"
import searchIcon from '../../img/search.svg'
import { SearchContainer, SearchInput, SubmitBtn } from "./styles";

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => { // previene el comportamiento por default del formulario y le da al onSearch el termino buscado
        console.log("recibido: ", searchTerm)
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <SearchContainer onSubmit={handleSubmit} >
            <SearchInput 
                type="text"
                placeholder="Buscar artista"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SubmitBtn type="submit" className="search-button" >
                <img src={searchIcon} alt="buscar" />
            </SubmitBtn>
        </SearchContainer>
    )
    
}

export default SearchBar;