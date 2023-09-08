import SectionHeader from '../../../components/section-header/SectionHeader';
import { BsCheckLg } from 'react-icons/bs';

import {AiOutlineCodepen, AiFillGithub} from 'react-icons/ai';

import './Projects.css'

let MyProjectsArr = [
  {
    projectName: 'My Portfolio',
    projectType: 'Personal Project',
    projectDescription: 'A "Who Am I?" type of page. Showing my interests, skills, proejcts, and certificates for those who are interested.',
    projectTechniques: ['Responsive', 'ReactJS', 'HTML', 'CSS'],
    isFinished: true,
    platform: 'github'
  },
  {
    projectName: 'MTI Student Testimonies',
    projectType: 'Personal Project',
    projectDescription: 'A fun project for me and my fellow MTI graduates, giving the opportunity for each one of us to say one last thing after graduating ^^',
    projectTechniques: ['ReactJS', 'Responsive', 'HTML', 'CSS'],
    isFinished: false
  },
  {
    projectName: 'E-Authentication System',
    projectType: 'Graduation Project',
    projectDescription: 'A mobile application referred to as "EasyAccess" that enables users of websites to have a more secure environment',
    projectTechniques: ['Flutter', 'HTML' , 'CSS', 'MongoDB', 'NodeJS'],
    isFinished: true,
    src: 'https://github.com/ElHuzain/EasyAccess-Mobile-Application',
    platform: 'github'
  },
  {
    projectName: 'Product Landing Page',
    projectType: 'FreeCodeCamp Challenge',
    projectDescription: 'A pseudo landing page for some pseudo product that doesn\'t actually exist.',
    projectTechniques: ['Responsive', 'ReactJS', 'CSS'],
    isFinished: false
  },
  {
    projectName: 'JavaScript Calculator',
    projectType: 'FreeCodeCamp Challenge',
    projectDescription: 'As simple as it can be, a JS calculator made in ReactJS.',
    projectTechniques: ['ReactJS', 'HTML', 'CSS', 'Redux'],
    isFinished: true,
    src: 'https://codepen.io/Ahmed-Huzain-the-typescripter/pen/yLGOGpr',
    platform: 'codepen'
  },
  {
    projectName: 'Random Quote Machine',
    projectType: 'FreeCodeCamp Challenge',
    projectDescription: 'Shuffle through a selected collection of quotes. Nothing massive, but it is here.',
    projectTechniques: ['ReactJS', 'HTML', 'CSS', 'Redux'],
    isFinished: true,
    src: 'https://codepen.io/Ahmed-Huzain-the-typescripter/pen/mdQQXJE',
    platform: 'codepen'
  },
  {
    projectName: 'E-Newspaper Application',
    projectType: 'Info. Technology Institute Project',
    projectDescription: 'Simple E-Newspaper application. Retrieves news data from NewsAPI.',
    projectTechniques: ['Flutter', 'NewsAPI', 'Responsive'],
    isFinished: true,
    src: 'https://github.com/ElHuzain/E-Newspaper',
    platform: 'github'
  },
  {
    projectName: 'Blog Post Website',
    projectType: 'Info. Technology Institute Project',
    projectDescription: 'Fully interactive blog post website made in PHP.',
    projectTechniques: ['PHP', 'SQL', 'HTML', 'CSS'],
    isFinished: true,
    src: 'https://github.com/ElHuzain/Disaster.com-Project-',
    platform: 'github'
  },

];

const Project = (props) => {
  let elements = props.projectTechniques.map(technique => {
    return <div style={{ gap: '.2rem' }} className="row"><BsCheckLg className="margin-center-v" color="var(--primary-clr)" /><p className="hoverable">{technique}</p></div>
  })

  let platform;
  switch(props.platform) {
    case 'fcc': platform = <><BsCheckLg /> FCC</>; break;
    case 'codepen': platform = <><AiOutlineCodepen/> CodePen</>; break;
    case 'github': platform = <><AiFillGithub/> GitHub</>; break;
  }
  
  platform = <p className="width-fit">{platform}</p>

  let Btn = props.isFinished ?
  <a className="width-100" target="_blank" href={props.src}><button className="width-100"><p className="row width-fit gap-05 align-center margin-center-h">Open in {platform}</p></button></a>
  : <button className="disabled-btn" disabled>COMING SOON</button>

  return <div className="container column gap-1 hoverable-outline">
    {/* <div className="img-container"></div> */}

    <div className="content-container column gap-1 padding-1 height-100 space-between">
      <div className="column">
        <h1 className="fw-bold fs-larger">{props.projectName}</h1>
        <p className="primary-clr">{props.projectType}</p>
      </div>

      <div>
        <p className="text-secondary-clr hoverable">{props.projectDescription}</p>
      </div>

      <div className="row wrap space-between gap-05">
        {elements}
      </div>
    </div>

    {Btn}

  </div>
}

const Projects = () => {
  let elements = MyProjectsArr.map(proj => <Project
    src={proj.src}
    isFinished={proj.isFinished}
    projectName={proj.projectName}
    projectType={proj.projectType}
    projectDescription={proj.projectDescription}
    projectTechniques={proj.projectTechniques}
    platform={proj.platform}
    />)

  return (
    <div id="projects" className="section-padding section column gap-1">
      <SectionHeader describer="What I have Made" title="Projects" />
      <div className="section-content grid-temp gap-1">

        {elements}

      </div>
    </div>
  )
}

export default Projects
