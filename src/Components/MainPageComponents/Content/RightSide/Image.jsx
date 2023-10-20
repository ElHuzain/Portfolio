import { styled } from 'styled-components';

const StyledImage = styled.div`
height: auto;
img {
    width: 100%;
}
@media only screen AND (max-width: ${({ theme }) => theme.screen.medium_desktop}) {
    width: 339px;
}
@media only screen AND (max-width: ${({ theme }) => theme.screen.small_desktop}) {
    width: 229px;
}
@media only screen AND (max-width: ${({ theme }) => theme.screen.medium_mobile}) {
    width: 185px;
}
@media only screen AND (max-width: ${({ theme }) => theme.screen.small_mobile}) {
    width: 149px;
}
`

const Image = () => {
    return (
        <StyledImage>
            <img alt='' src="./images/images/me.png" />
        </StyledImage>
    )
}

export default Image
