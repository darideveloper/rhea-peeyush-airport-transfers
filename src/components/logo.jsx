import PropTypes from 'prop-types'

export default function Logo ({ image, alt, width, className="" }) {
  return (
    <div className={`logo ${className}`}>
      <a href="/">
        <img src={`./imgs/${image}`} alt={alt}  style={{width: width}} className="mx-auto cursor-pointer transition-opacity hover:opacity-80 duration-300"/>
      </a>
    </div>
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  className: PropTypes.string,
}