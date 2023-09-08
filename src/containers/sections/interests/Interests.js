import SectionHeader from '../../../components/section-header/SectionHeader';
import { BiBrain, BiCodeAlt } from 'react-icons/bi'
import { MdDesignServices, MdOutlineDesignServices } from 'react-icons/md'
import { FaNetworkWired } from 'react-icons/fa6'
import { AiFillCamera } from 'react-icons/ai'

import './Interests.css';

const Interest = (props) => {
  return <div className="column width-100 align-center gap-05">
    {props.logo}
    <h1 className="margin-center-h fs-larger fw-bold">{props.name}</h1>
    <p className="margin-center-h align-center ff-en-hr fw-bold text-secondary-clr hoverable fw-thin">{props.description}</p>
  </div>
}

const Interests = () => {
  return (
    <div id="interests" className="section section-padding column gap-1">
      <SectionHeader describer="Things I Like ^^" title="Interests" />
      <div className="section-content width-100 flex-wrap column gap-2">
        <div className="row margin-center-h flex-wrap width-fit gap-2">
          <Interest logo={<BiCodeAlt size="40" color="var(--primary-clr)" className="margin-center-h" />} name="Coding" description="See What I Can Do Best" />
          <Interest logo={<BiBrain size="40" color="var(--primary-clr)" className="margin-center-h" />} name="Teaching" description="The Passion I Thrive To Achieve" />
          <Interest logo={<MdDesignServices size="40" color="var(--primary-clr)" className="margin-center-h" />} name="UI Design" description="Professionally Copying Others Designs" />
        </div>
        <div className="row margin-center-h flex-wrap width-fit gap-2">
          <Interest logo={<FaNetworkWired size="40" color="var(--primary-clr)" className="margin-center-h" />} name="Networks" description="I Find It Oddly Entertaining To Learn About Those.." />
          <Interest logo={<BiCodeAlt size="40" color="var(--primary-clr)" className="margin-center-h" />} name="Photography" description="Having a Camera Where It's Illegal" />
        </div>
      </div>
    </div>
  )
}

export default Interests
