import Facebook from '../../assets/svgs/facebook.svg';
import LinkedIn from '../../assets/svgs/linkedin.svg';
import Instagram from '../../assets/svgs/instagram.svg';
import GitHub from '../../assets/svgs/github.svg';

import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';

import './Hero.css'

const Contact = (props) => {
    return <a target="_blacnk" href={props.link} className="column gap-05 align-center">
        {props.logo}
        <p className="hoverable">{props.name}</p>
    </a>
}

const Hero = (props) => {
    return <div id="hero" className={!props.visibility ? 'hidden' : ''}>

        <div className="hero-container width-fit margin-center column gap-3 align-center">

            <div className="hero-welcome column margin-center-h">
                <p className="fs-larger align-left ff-en-hr text-secondary-clr fw-bold">Hey ,</p>
                <h1 className="fw-bold fs-huge">I'm <span className="primary-clr">Ahmed Huzain</span> 🙂</h1>
                <p className="width-100  align-left fs-larger ff-en-hr text-secondary-clr fw-bold">A <span className="primary-clr">Junior</span> Web Developer</p>
            </div>
            
            <div style={{margin: '3rem auto'}} className="hero-contacts width-100 space-between row margin-center-h">
                <Contact name="Facebook" link="https://www.facebook.com/ahmed.huzain.96/" logo={<BiLogoFacebook size="50" className="margin-center-h" style={{color: 'var(--primary-clr)'}}/>} />
                <Contact name="LinkedIn" link="https://www.linkedin.com/in/ahmed-huzain-05ab76230/" logo={<BiLogoLinkedinSquare size="50" className="margin-center-h" style={{color: 'var(--primary-clr)'}}/>} />
                <Contact name="Instagram" link="https://www.instagram.com/el_huzain98/" logo={<BiLogoInstagramAlt size="50" className="margin-center-h" style={{color: 'var(--primary-clr)'}}/>} />
                <Contact name="GitHub" link="https://github.com/ElHuzain" logo={<BiLogoGithub size="50" className="margin-center-h" style={{color: 'var(--primary-clr)'}}/>} />
            </div>
            
            <div className="hero-action row gap-05 margin-center-h">
                <p className='margin-center-v fs-larger'>Let's</p><a href="#about-me"><button onClick={props.click}>GET STARTED</button></a>
            </div>

        </div>

    </div>

}

export default Hero
