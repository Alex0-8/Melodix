import styled from "styled-components";

const LibraryContainer = styled.section`
    width: 35%;
    max-height: 500px;
    overflow-y: auto;
    min-width: 245px;
    padding: 15px;
    margin: 15px 10px 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0px 0px 10px 3px #ada2e2;
    border: 2px solid #a0ffe8;

    &::-webkit-scrollbar{
        width: 7px;
        background-color: #000;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: #c92ff8;
        border-radius: 5px;
    }
`;

const LibraryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & svg {
        width: 22px;
        fill: #000;
    }

    @media (prefers-color-scheme: dark){
        & svg{
            fill: #b3b3b3;
        }
    }
`;

const RemoveFromBtn = styled.button`
    width: 100px;
    font-weight: 600;
    font-size: 18px;
    background-color: #00ffff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        transform: scale(.9);
        background-color: red;
    }
`;

export {
    LibraryContainer,
    LibraryHeader,
    RemoveFromBtn,
}