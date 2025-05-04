import styled from "styled-components";

const ResultsContainer = styled.section`
    width: 50%;
    max-height: 500px;
    overflow-y: auto;
    min-width: 245px;
    padding: 15px;
    margin: 15px 10px 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: ${({hasError, notFound}) => hasError ? "0px 0px 10px 3px #ff1111" : notFound ? "0px 0px 10px 3px #60f5d0" : "0px 0px 10px 3px #ada2e2"};
    border: 2px solid #a0ffe8;

    &::-webkit-scrollbar{
        width: 7px;
        background-color: #000;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c92ff8;
        border-radius: 5px;
    }

    & h2 {
        text-align: center;
    }
`;

const SongContainer = styled.div`
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    border-bottom: 10px;

    & > a {
        text-decoration: none;
        color: #c92ff8;
    }
`;

const AddToLibraryBtn = styled.button`
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
    }
`;

const RandomBtn = styled.button`
    width: 100px;
    margin: 0 auto;
    background-color: #00ff38;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        transform: scale(.9);
    }
`;

const RetryBtn = styled.button`
    width: 100px;
    height: 17px;
    font-size: 17px;
    margin: 0 auto;
    background-color: #00ff38;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        transform: scale(.9);
    }
`;

export {
    ResultsContainer,
    SongContainer,
    AddToLibraryBtn,
    RandomBtn,
    RetryBtn
}