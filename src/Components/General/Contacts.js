import { styled } from 'styled-components';
import Social from './Social.styled';
import Button from './Button.styled';

const StyledContacts = styled.div`
display: flex;
flex-direction: column;
${({ row }) => row && "flex-direction: row;"}
align-items: center;
gap: 1rem;
width: fit-content;
height: fit-content;
margin: auto;
div {
    display: flex;
    gap: 0.5rem;
}
`

const Contacts = ({ row }) => {
    return (
        <StyledContacts row={row}>
            <div>
                <Social image="./images/buttons/github.svg" url="https://github.com/elhuzain" />
                <Social image="./images/buttons/linkedin.svg" url="https://www.linkedin.com/in/elhuzain/" />
                <Social image="./images/buttons/instagram.svg" url="https://www.instagram.com/el_huzain98/" />
                <Social image="./images/buttons/facebook.svg" url="https://www.facebook.com/ahmed.huzain.96/" />
            </div>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=201126798092&text=Hey_I_am_interested_in_working_with_you">
                <Button img="./images/buttons/whatsapp.svg" text="WhatsApp" />
            </a>
        </StyledContacts>
    )
}

export default Contacts
