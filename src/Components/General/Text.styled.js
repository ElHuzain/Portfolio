import { styled } from 'styled-components';

export const Bold = styled.span`
font-weight: bold;
background-color: transparent !important;
`

export const Underline = styled.span`
text-decoration: underline;
background-color: transparent !important;
`

export const Italic = styled.span`
background-color: transparent !important;
font-style: italic;
`

export const Thin = styled.span`
background-color: transparent !important;
font-weight: thin;
`

export const Primary = styled.span`
background-color: transparent !important;
color: ${({ theme }) => theme.colors.primary}
`

const Text = styled.p(({ ff, fs, color, theme }) => `
background-color: transparent !important;
color: ${theme.colors[color] || theme.colors.text};
font-family: ${theme.font.family[ff] || theme.font.family.plus};
font-size: ${theme.font.size[fs] || theme.font.family.regular}

`)

export default Text;