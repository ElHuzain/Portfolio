import { styled } from 'styled-components';
import Contacts from '../../General/Contacts';

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0px;
    right: 0px;
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height: 4rem; */
    padding: 0.5rem;
    div {
      margin: unset;
      margin-left: auto !important;
    }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Contacts row={true} />
    </StyledFooter>
  )
}

export default Footer
