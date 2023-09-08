import SectionHeader from '../../../components/section-header/SectionHeader';
import { BsCheckLg } from 'react-icons/bs';

import gradCert from '../../../assets/images/Certifications/Graduation-Cert.png';
import phpCert from '../../../assets/images/Certifications/ITI-PHP-Cert.png';
import flutterCert from '../../../assets/images/Certifications/ITI-Flutter-Cert.png';


import './Certificates.css'

const Certificate = (props) => {

  let element = props.desc.map(desc => {
    if (desc.t == 'Course Projects') {

      let projs = desc.v.map(projc => {
        return <li className="hoverable"><BsCheckLg /> {projc}</li>
      })

      return <div style={{ marginTop: 'var(--spacing-1)' }}>
        <p className="fw-bold">{desc.t}</p>
        <ul style={{ listStyleType: 'none' }}>
          {projs}
        </ul>
      </div>
    }
    else return <p className="row gap-05">
      <span className="fw-bold">{desc.t + ":"}</span>
      <span className="hoverable">{desc.v}</span>
    </p>
  })

  return <div className="row gap-1">
    <hr style={{ width: '3px', minHeight: '100%', border: '0', backgroundColor: 'var(--primary-clr)' }} />
    <div className="column gap-1 height-100 width-100 align-left space-between">

      <div className="header column">
        <p className="text-secondary-clr">{props.date}</p>
        <h1 className="fw-bold font-large primary-clr">{props.issuer}</h1>
      </div>

      <div className="column">
        {element}
      </div>

      <a className="width-fit" target="_blank" href={props.src}><button className="width-fit">Show Certificate</button></a>
    </div>

  </div>

}

const Certificates = () => {
  return (
    <div id="certificates" className="section-padding section column gap-1">
      <SectionHeader describer="What I Have Earned" title="Education & Certificates" />
      <div className="column gap-3">

        <h1 className="fw-bold fs-larger align-center primary-clr">Educational / Degree</h1>
        <div className="section-content column gap-1">
          <Certificate
          src={gradCert}
          issuer="Modern University for Technology & Information" date="2018 - 2023"
            desc={[{ t: 'Certificate', v: 'Bachelor\'s Degree in Information Systems Department of Computer Science' }, { t: 'Grade', v: '3.333 | Very Good' },
            { t: 'Graduation Project', v: 'E-Authentication System' }, { t: 'Project Grade', v: 'Excellent' }]} />
        </div>

        <h1 className="fw-bold fs-larger align-center primary-clr">Information Technology Institute Courses</h1>
        <div className="section-content grid-temp gap-2">
          <Certificate
          src={phpCert}
          issuer="Information Technology Institute" date="24 Jul. 2022 - 10 Aug. 2022"
            desc={[{ t: 'Certificate', v: 'Developing Web Applications Using PHP' },
            { t: 'Skills', v: 'PHP | SQL | Laravel' },
            { t: 'Course Projects', v: ['Blog Post Website using PHP'] }]} />

          <Certificate
            src={flutterCert}
            issuer="Information Technology Institute" date="18 Sept. 2022 - 28 Sept. 2022"
            desc={[{ t: 'Certificate', v: 'Mobile Development Using Flutter' },
            { t: 'Skills', v: 'Building Responsive & Adaptive Interfaces in Flutter' },
            { t: 'Course Projects', v: ['E-News Paper Application'] }]} />
        </div>

        <h1 className="fw-bold fs-larger align-center primary-clr">FreeCodeCamp Courses</h1>
        <div className="section-content grid-temp gap-2">
          <Certificate
          src="https://www.freecodecamp.org/certification/elhuzain/responsive-web-design"
          issuer="FreeCodeCamp" date="July 2023"
            desc={[{ t: 'Certificate', v: 'Responsive Front End Development' },
            { t: 'Skills', v: 'Responsive writing in: HTML | CSS | JS' },
            { t: 'Course Projects', v: ['Survey Form', 'Tribute Page', 'Technical Documentation Page', 'Product Landing Page', 'Personal Portfolio Webpage'] }]} />

          <Certificate
            src="https://www.freecodecamp.org/certification/elhuzain/front-end-development-libraries"
            issuer="FreeCodeCamp" date="August 2023"
            desc={[{ t: 'Certificate', v: 'Front End Development Libraries' },
            { t: 'Skills', v: 'ReactJS | Redux | jQuery | SASS | Bootstrap' },
            { t: 'Course Projects', v: ['Random Quote Machine', 'Markdown Previewer', 'Drum Machine', 'JavaScript Calculator', '25 + 5 Clock'] }]} />
        </div>

      </div>

    </div>
  )
}

export default Certificates
