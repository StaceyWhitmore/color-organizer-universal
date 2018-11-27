import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../stylesheets/Menu.scss'

const selectedStyle = { color: 'red' }

const Menu = ({ sort }) =>
	<nav className="menu">
		<NavLink to="/" style={(sort === '/') ? selectedStyle : {}}>date</NavLink>
		<NavLink to="/sort/title" activeStyle={selectedStyle}>title</NavLink>
		<NavLink to="/sort/rating" activeStyle={selectedStyle}>rating</NavLink>
	</nav>

Menu.propTypes = {
	sort: PropTypes.string
}

export default Menu
