import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import { styled } from 'styled-components';

import Content from '../Components/ProjectsPageComponents/Content/Content';
import Header from '../Components/ProjectsPageComponents/Header/Header';
import Footer from '../Components/ProjectsPageComponents/Footer/Footer';

const StyledProjectsPage = styled(animated.div)`
position: relative;
height: 100vh;
display: flex;
flex-direction: column;
`;

const ProjectsPage = ({ click }) => {



    const springs = useSpring({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 }
    });

    return (
        <StyledProjectsPage style={springs}>
            <Header sweep={click} />
            <Content />
            <Footer />
        </StyledProjectsPage>
    )
}

export default ProjectsPage
