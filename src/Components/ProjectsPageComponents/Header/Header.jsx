import {styled} from 'styled-components';
import {TextButton} from '../../General/Button.styled';

const StyledHeader = styled.header`
    padding: 1rem;
    position: absolute;
    top: 0;
    background-color: transparent !important;
    /* backdrop-filter: blur(8px); */
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
    width: 100%;

`

const Header = ({sweep}) => {
  return (
    <StyledHeader>
      <TextButton click={sweep} bold={true} text="GO BACK"/>
    </StyledHeader>
  )
}

export default Header
