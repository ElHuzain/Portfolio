const SectionHeader = (props) => {
  return (
    <div className="column align-left width-100 margin-right">
        <p className="fs-large fw-bold ff-en-hr text-secondary-clr">{props.describer}</p>
        <h1 className="fs-largest fw-bold">{props.title}</h1>
        <hr style={{height: '3px', width: '10%', border: '0', backgroundColor: 'var(--primary-clr)'}}/>
    </div>
  )
}

export default SectionHeader