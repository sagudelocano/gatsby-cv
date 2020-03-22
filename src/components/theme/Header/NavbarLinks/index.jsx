import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import navbarStyles from "../header.module.css"

const sections = [
	{
		title: 'About',
		href: '#about'
	},
	{
		title: 'Projects',
		href: '#projects'
	},
	{
		title: 'Contact',
		href: '#contact'
	}
]
function NavbarLinks ({ desktop }) {
	const [section, setSection] = useState('About');
	const clickMenu = (title) => {
		setSection(title);
	}
	return (
		<Wrapper desktop={desktop}>
			{
				sections.map((item, index) => (
					<AnchorLink
						style={{color: section === item.title ? '#ffffff' : '#FFB8B8' }}
						key={index} href={item.href}
						onClick={() => clickMenu(item.title)}
					>
						{item.title}
					</AnchorLink>
				))
			}
		</Wrapper>
	)
}

export default NavbarLinks
