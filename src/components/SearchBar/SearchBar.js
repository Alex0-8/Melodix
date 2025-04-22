import { useState } from "react"
import searchIcon from '../../img/search.svg'

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => { // previene el comportamiento por default del formulario y le da al onSearch el termino buscado
        console.log("recibido: ", searchTerm)
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-container" >
            <input 
                type="text"
                placeholder="Buscar artista"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button" >
                <img src={searchIcon} alt="buscar" />
            </button>
        </form>
    )
    
}

export default SearchBar;