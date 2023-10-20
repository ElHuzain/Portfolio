import { styled } from 'styled-components';

const StyledSocial = styled.img`
width: fit-content;
cursor: pointer;
transition: transform .2s;
&:hover {
    transform: scale(1.1);
}
`

const Social = ({image, url}) => {
    return (
        <a target="_blank" rel='noreferrer' href={url}><StyledSocial src={image}/></a>
    )
}

export default Social;
