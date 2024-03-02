import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-10  py-2 cursor-pointer  transition-colors duration-300 transform     hover:text-gray-700 ${
        isActive ? 'bg-orange-500 hover:bg-orange-500  text-gray-200' : 'text-gray-500 hover:bg-gray-200'
        }`
      }
    >
      <Icon  className='w-5 h-5 ' />
      <span className='mx-4 font-medium '>{label}</span>
    </NavLink>
  )
}

MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.func
}
export default MenuItem
