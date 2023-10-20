import Title from './Title';
import About from './About';
import Buttons from './Buttons';

import { styled } from 'styled-components';

const StyledLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 2rem;
    margin: auto 0;
    padding-left: 2rem;

    @media only screen AND (max-width: ${({ theme }) => theme.screen.small_desktop}) {
      background-color: ${({ theme }) => theme.colors.element_fade};
      width: 100%;
      padding: 1rem;
    }
    @media only screen AND (max-width: ${({ theme }) => theme.screen.medium_mobile}) {
      button {
        margin-top: 20px;
      }
    }
`

const LeftSide = () => {
  return (
    <StyledLeftSide>
      <Title />
      <About />
      <Buttons />
    </StyledLeftSide>
  )
}

export default LeftSide
