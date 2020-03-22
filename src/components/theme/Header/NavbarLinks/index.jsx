import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import clsx from 'clsx'
import { Wrapper } from './styles'
import headerStyles from "../header.module.css"

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
						className={clsx({ [headerStyles.menuItem]: true, [headerStyles.active]: section === item.title})}
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
