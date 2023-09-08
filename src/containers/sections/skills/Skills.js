import SectionHeader from '../../../components/section-header/SectionHeader';
import { RiWindowFill } from 'react-icons/ri'
import { FaServer, FaNetworkWired } from 'react-icons/fa6'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { TbBrandOffice } from 'react-icons/tb'
import { MdDesignServices } from 'react-icons/md';

import { HiOutlinePresentationChartBar, HiOutlineBookOpen } from 'react-icons/hi'
import { BiTime } from 'react-icons/bi'
import { AiOutlineCamera } from 'react-icons/ai'
import { RiEnglishInput } from 'react-icons/ri'

import { BsCheckLg } from 'react-icons/bs';

import './Skills.css';

const Skill = (props) => {
  let skillist;
  if (props.skills) skillist = props.skills.map(skill => {
    return <div className="hoverable row gap-05 "><BsCheckLg className="primary-clr margin-center-v" />{skill}</div>
  });
  let final;
  if (!props.description) final = <div className="grid-3 flex-wrap gap-05">{skillist}</div>
  else final = <p className="align-center margin-center-h width-fit hoverable fs-small">{props.description}</p>;
  return <div className="container space-between hoverable-outline column gap-1 padding-1 border-radius">
    {props.logo}
    <h1 className="fw-bold fs-large">{props.skillName}</h1>
    {final}
  </div>
}

const Skills = () => {
  return (
    <div id="skills" className="section-padding section column gap-1">
      <SectionHeader describer="What I Can Do" title="Skills" />
      <div className="section-content column gap-2">

        <div className="set column gap-1">
          <h1 className="align-center fw-bold primary-clr fs-larger">Technical Skill Set</h1>
          <div className=" width-100 margin-center-h gap-1 align-center grid-temp">
            <Skill
              skillName="Front End Web Development"
              skills={['ReactJS', 'HTML', 'CSS', 'JavaScript', 'SASS', 'jQuery']}
              logo={<RiWindowFill style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
            <Skill
              skillName="Back End Web Development"
              skills={['NodeJS', 'Express', 'PHP', 'MongoDB', 'SQL']}
              logo={<FaServer style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
            <Skill
              skillName="Microsoft Office Suite"
              skills={['Word', 'Excel', 'PowerPoint', 'Access']}
              logo={<TbBrandOffice style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
            <Skill
              skillName="Computer Network Essentials"
              skills={['Routing', 'Subnetting', 'Configs', 'LANs', 'VLANs']}
              logo={<FaNetworkWired style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
            <Skill
              skillName='Graphic Design'
              skills={['Figma', 'GIMP', 'Photoshop', 'Inkscape']}
              logo={<MdDesignServices style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
          </div>
          <p className="align-center text-secondary-clr">As well as other skills such as fast typing, troubleshooting, organizing files, data entry</p>
        </div>

        <div className="set column gap-1">
          <h1 className="align-center fw-bold primary-clr fs-larger">Non Technical Skill Set</h1>
          <div className=" width-100 margin-center-h gap-1 align-center grid-temp">
            <Skill
              skillName="Teaching"
              description="Able to impart knowledge, skills, or information to others effectively."
              logo={<FaChalkboardTeacher style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
            <Skill
              skillName="Self Learning"
              description="Set A Goal, Go For It."
              logo={<HiOutlineBookOpen style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
            <Skill
              skillName="Photography Composition"
              description="While I'm no expert, I can surely be handy with photo composition"
              logo={<AiOutlineCamera style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
              <Skill
                skillName="Presentation"
                description="Combined with my experience in Figma & PowerPoint, I can deliver information, ideas, or proposals to an audience in an organized and engaging manner."
                logo={<HiOutlinePresentationChartBar style={{
                  color: 'var(--primary-clr',
                  margin: '0 auto'
                }} size="60" />}
              />
              <Skill
                skillName="Time Management"
                description="Efficiently organizing and prioritysing tasks, projects, and activities to make the most of available time."
                logo={<BiTime style={{
                  color: 'var(--primary-clr',
                  margin: '0 auto'
                }} size="60" />}
              />
            <Skill
              skillName="Billingual"
              description="Able to read, write, and speak fluently in both Arabic and English languages."
              logo={<RiEnglishInput style={{
                color: 'var(--primary-clr',
                margin: '0 auto'
              }} size="60" />}
            />
          </div>
        </div>



      </div>
    </div>
  )
}

export default Skills
