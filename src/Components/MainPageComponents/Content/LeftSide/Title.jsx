import Text, { Bold, Underline, Primary } from '../../../General/Text.styled';
import { styled } from 'styled-components';

const StyledTitle = styled.div`
display: flex;
flex-direction: column;
width: fit-content;

p {
    margin-top: -2px;
    margin-bottom: -3px;
}
p:first-of-type{
    margin-top: 0;
    margin-bottom: 0;
}
p:last-of-type{
    margin-top: 0;
    margin-bottom: 0;
}


@media only screen AND (max-width: ${({theme}) => theme.screen.large_desktop}) {
    p:nth-of-type(2) {
        font-size: 3rem !important;
    }
}
@media only screen AND (max-width: ${({theme}) => theme.screen.medium_mobile}) {
    p:nth-of-type(2) {
        font-size: 2rem !important;
    }
}

`


const Title = () => {
    return (
        <StyledTitle>
            <Text ff='rubik'>Hey There,</Text>
            <Text ff="robotoc" fs="largest"><Bold>I'm <Primary>Ahmed Huzain</Primary></Bold></Text>
            <Text ff='roboto'>A <Underline>Junior</Underline> <Bold><Primary>Front-End Developer</Primary></Bold> and a <Bold><Primary>Teacher</Primary></Bold></Text>
        </StyledTitle>
    )
}

export default Title
