import { styled } from 'styled-components';
import Text, { Bold } from '../../General/Text.styled';

const StyledCTA = styled.div`
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    margin: 0 !important;
    div {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-bottom: 1rem;
        cursor: pointer;
        &:hover {
            opacity: 0.9;
        }
        &:active {
            transform: scale(0.9);
        }
    }
    img {
        width: 24px;
        margin: 0 auto;
    }
`

const CTA = ({close}) => {
    return (
        <StyledCTA>
            <div onClick={close}>
                <Bold><Text color="primary">VIEW MY PROJECTS</Text></Bold>
                {/* <TextButton text="VIEW MY PROJECTS" bold={true} primary={true} /> */}
                <img alt='' src="./images/buttons/arrow-down.svg" />
            </div>
        </StyledCTA>
    )
}

export default CTA
