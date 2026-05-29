import PropTypes from 'prop-types'

export default function ContactCard ({svgPath, link="", text, color="text-white", iconColor="fill-white"}) {
  return (
    <div className="link flex items-center justify-start my-3">
      <svg 
        viewBox="0 0 24 24" 
        className={`w-5 ${iconColor}`}
      >
        {svgPath}
      </svg>
      {
        link 
        ? 
        <a href={link} className={`ms-5 text-md hover:opacity-70 duration-300 ${color}`} target='_blank'>{text}</a> 
        : 
        <p className={`ms-5 text-md ${color}`}>{text}</p>
      }
    </div>
  )
}

ContactCard.propTypes = {
  svgPath: PropTypes.element.isRequired,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  iconColor: PropTypes.string,
}