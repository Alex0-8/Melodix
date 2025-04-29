import styled from "styled-components";

const HeaderSection = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    padding: 15px;
    margin: 0 auto;
    text-align: center;
    border-bottom: 2px solid #a0ffe8;

    a {
        text-decoration: none;
        color: #000;
    }

    @media (prefers-color-scheme: dark){
        background-color: ${props => props.theme.colors.darkMode.primary};

        & > a {
            color: ${props => props.theme.colors.darkMode.txt};
        }
    }
`;

export default HeaderSection;