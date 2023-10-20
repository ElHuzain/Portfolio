import { styled } from 'styled-components';

import ProjectList from './ProjectList';

const StyledContent = styled.div`
display: flex;
flex-direction: column;
& > div {
    margin: 0 auto;
    width: fit-content;
}
height: 100vh !important;
overflow-y: scroll;
width: 100%;
gap: 2rem;
margin: 3rem 0;
margin-bottom: 4rem;
`



const Content = () => {
    return (
        <StyledContent>
            <ProjectList name="Front End Mentor Challenges" category="FEM" />
        </StyledContent>
    )
}

export default Content
