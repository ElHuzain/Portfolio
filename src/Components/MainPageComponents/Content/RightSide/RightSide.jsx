import { styled } from 'styled-components'
import Image from './Image';
import Contacts from '../../../General/Contacts';

const StyledRightSide = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: fit-content;

padding-right: 2rem;

@media only screen AND (max-width: ${({ theme }) => theme.screen.small_desktop}){
  flex-direction: row;
  height: fit-content;
  margin: 0 auto;
  justify-content: space-between;
}

button {
  margin: 0 auto;
}
`

const RightSide = () => {
  return (
    <StyledRightSide>
      <Image />
      <Contacts />
    </StyledRightSide>
  )
}

export default RightSide
