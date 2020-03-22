import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import navbarStyles from "../header.module.css"

const Navbar = () => (
	<Wrapper as={Container}>
		<Link className={navbarStyles.logo} to="/">Web Developer</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
