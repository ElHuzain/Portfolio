import Before from './sections/before-content/Before';
import AboutMe from './sections/about-me/AboutMe';
import Interests from './sections/interests/Interests';
import Skills from './sections/skills/Skills';
import Certificates from './sections/certificates/Certificates';
import Projects from './sections/projects/Projects';

import './Content.css';

const Content = (props) => {
    return <div id="sections-container" className="column gap-1">
        {/* <Before/> */}
        <AboutMe click={props.click} />
        <Interests />
        <Skills />
        <Certificates />
        <Projects />
    </div>

}

export default Content