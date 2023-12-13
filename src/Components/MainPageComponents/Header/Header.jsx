import { styled } from 'styled-components';
import Text, { Bold } from '../../General/Text.styled';
const StyledHeader = styled.div`
    padding: 1rem 2rem;
    margin: 0 !important;
`

const Header = () => {
    return (
        <StyledHeader>
            <Text ff='robotoc' fs='large'><Bold>El Huzain</Bold></Text>
        </StyledHeader>
    )
}

export default Header
