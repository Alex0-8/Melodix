import styled from 'styled-components'

const SongDetails = styled.div`
    width: 50%;

    span {
        font-size: 20px;
        font-weight: ${props => props.theme.fonts.bolderSize};
    }
`

export {
    SongDetails
}