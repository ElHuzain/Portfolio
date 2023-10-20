import { styled } from 'styled-components';
import { useState } from 'react';
import Project from './Project';
import Projects from '../../../projects.json';
import Text, { Bold, Primary } from '../../General/Text.styled';

const StyledProjectList = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
gap: 2rem;
        & > p {
        margin: 0 auto;
        margin-top: 2rem;
        width: fit-content;
    }

`;

const List = styled.div`
transition: max-height 53s;
${({ Expanded }) => Expanded ? "max-height: 0;" : "max-height: fit-content;"}
display: grid;
grid-template-columns: 312px 312px 312px;
flex-wrap: wrap;
gap: 2rem;
width: fit-content !important;
margin: 0 auto !important;
@media only screen AND (max-width: ${({ theme }) => theme.screen.medium_desktop}) {
        grid-template-columns: 1fr 1fr 1fr;
}
@media only screen AND (max-width: ${({ theme }) => theme.screen.small_desktop}) {
        grid-template-columns: 1fr 1fr;
}
@media only screen AND (max-width: ${({ theme }) => theme.screen.medium_mobile}) {
        grid-template-columns: 1fr;
}
`

const ProjectList = ({ name, category }) => {
    const [Expanded, setExpanded] = useState(true);

    const elms = Projects.map((e, index) => {
        if (e.category === category) return <Project
            category={e.category}
            title={e.title}
            subtitle={e.subtitle}
            technologies={e.technologies}
            image={`./images/projects/${e.image}`}
            repository={e.repository}
            live={e.live}
            inverted={index % 2 === 1}
        />
        else return "";
    }
    )

    return (
        <StyledProjectList>
            <Text onClick={() => setExpanded(prev => !prev)} fs="large"><Bold><Primary>{"<"}</Primary></Bold> {name} <Bold><Primary>{"/>"}</Primary></Bold></Text>
            <List Expanded={Expanded}>
                {elms}
            </List>
        </StyledProjectList>
    )
}

export default ProjectList
