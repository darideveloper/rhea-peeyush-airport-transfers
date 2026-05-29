import PropTypes from 'prop-types'

export default function SubmitBtn ({value, extraClass, type="submit", onClick=() => {}}) {

  const className = `
    no-collect 
    inline-block
    bg-blue border-blue border-4 
    text-white text-2xl md:text-xl font-bold 
    cursor-pointer 
    rounded-full
    py-2
    duration-300 hover:bg-white hover:text-blue
    ${extraClass}
  `

  return (
    <input 
      type={type} 
      value={value}
      className={className}
      onClick={onClick}
    />
  )
}

SubmitBtn.propTypes = {
  value: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}