import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import HeaderSection from './styles';

const Header = ({hideSearch}) => {
    return(
        <HeaderSection>
            <Link to="/"><h1>Melodix</h1></Link>

            {!hideSearch && <SearchBar /> /*hace que el search bar se renderize solo si no se encuentra en la pagina de song details*/} 
        </HeaderSection>
    )
}

export default Header;