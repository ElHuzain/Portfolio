import { styled } from 'styled-components';
import Text, { Bold } from './Text.styled';

const StyledButton = styled.button(({ type, theme }) => `
border: 0;
display: flex;
align-content: center;
align-items: center;
gap: 0.5rem;
cursor: pointer;
font-size: ${theme.font.size.regular};
border-radius: ${theme.borderRadius};
padding: 0.5rem;
width: fit-content;
&:hover {
    opacity: 0.8;
}
&:active {
    transform: scale(0.95);
}

${type === 'bordered' ? `
border: 3px solid ${theme.colors.primary};
` : `
color: ${theme.colors.background};
background-color: ${theme.colors.primary};
border-bottom: 3px solid ${theme.colors.secondary};
`} 

`);

const StyledTextButton = styled.button(({ primary, bold, theme }) => `
border: 0;
cursor: pointer;
font-size: ${theme.font.size.regular};
background-color: transparent;
&:active {
    transform: scale(0.9);
}
&:hover {
    opacity: 0.8;
}

${bold && `font-weight: ${theme.font.weight.bold}`};
${primary ? `color: ${theme.colors.primary}` : `color: ${theme.colors.text}`};

`)

const Button = ({ img, text }) => {

    return (
        <StyledButton>
            {img ? <img alt='' src={img} /> : ""}
            <Text color='background'><Bold>{text}</Bold></Text>
        </StyledButton>
    )
}

export const TextButton = ({ click, bold, primary, text }) => {
    return (
        <StyledTextButton onClick={click} primary={primary} bold={bold}>{text}</StyledTextButton>
    )
}

export default Button;