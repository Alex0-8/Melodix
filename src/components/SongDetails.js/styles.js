import styled from "styled-components";

const PageSongdetails = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;

    span {
        font-size: 20px;
        font-weight: ${props => props.theme.fonts.bolderSize};
    }
`;

const AlbumImg = styled.img`
    width: 200px;
`;

const LoadingImg = styled.img`
    width: 400px;
    margin: 0 auto;
`;

const DetailsDescription = styled.p`
    max-width: 50%;
`;

export {
    PageSongdetails,
    AlbumImg,
    LoadingImg,
    DetailsDescription
}