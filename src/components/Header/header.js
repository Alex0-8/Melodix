import React from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Header = ({onSearch, hideSearch}) => {
    return(
        <header>
            <Link to="/"><h1>Melodix</h1></Link>

            {!hideSearch && <SearchBar onSearch={onSearch} /> /*hace que el search bar se renderize solo si no se encuentra en la pagina de song details*/} 
        </header>
    )
}

export default Header;