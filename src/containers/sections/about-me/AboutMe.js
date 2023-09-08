import SectionHeader from '../../../components/section-header/SectionHeader';
import Img from '../../../assets/images/me-2-min.JPG';

import PDF from '../../../assets/pdfs/Huzain CV - 2.pdf';


import './AboutMe.css'

const Info = (props) => {
  return <div className="row gap-05">
    <div className="column center"style={{width: '15px', height:'15px', backgroundColor: 'black', borderRadius: '100%'}}>
      <div className="margin-center-h" style={{height: '50%', width: '50%', borderRadius: '100%', backgroundColor: 'var(--primary-clr)'}}></div>
    </div>
    <p className="fw-bold">{props.keye + ":"}</p>
    <p className="hoverable">{props.value}</p>
  </div>
}

const AboutMe = (props) => {
  return (
    <div id="about-me" className="section-padding section column gap-1">
      <SectionHeader describer="Find out" title="About Me" />
      <div className="section-content responsive-grid-1">

        <div className="img-container">
          <img style={{width: '100%', height: '100%'}} src={Img}/>
        </div>

        <div className="text-container column gap-1 space-between">
          <div className="story column gap-05">
            <h1 className="fw-bold fs-larger">The Journey To My Passion</h1>
            <p className="text-secondary-clr"><span className="hoverable">My name is Ahmed, I was born and raised in Saudi Arabia, Riyadh. I lived there for the first 19 years of my life, till I finished education..</span>
              <br/><br/>
              <span className="hoverable">At 12 years old, my father bought me my first personal computer, which was a huge turn in my life. Aside from playing games all day, I would sometimes learn about coding, hacking, and other computer-related fields that happened to catch my interest</span>
              <br/><br/>
              <span className="hoverable">I travelled to my home country, Egypt. That is when I started attending college as a Computer Science student.</span>
              <br/><br/>
              <span className="hoverable">Through my academic journey, I have started developing enthusiasim for being a teacher, instruct, or anything as such.</span>
              <br/><br/>
              <span className="hoverable">I graduated from MTI University and earned my Bechelor's degree with 3.33 GPA. And here I am, useless, jobless, and alone.</span></p>
          </div>

          <div className="info container gap-1">
            <Info keye="Name" value="Ahmed Mohammed Huzain"/>
            <Info keye="Birthdate" value="April 27th"/>
            <Info keye="Email" value="a.huzain98@gmail.com"/>
            <Info keye="Nationality" value="Egyptian"/>
            <Info keye="Phone" value="+02 112679 8092"/>
            <Info keye="Address" value="Cairo, Egypt"/>
          </div>

          <div className="buttons row gap-05">
            <a target="_blank" href={PDF}><button>Download CV</button></a>
            <button onClick={props.click}>Contact Me</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe
