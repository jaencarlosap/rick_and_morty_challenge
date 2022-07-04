import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdFormatAlignCenter } from 'react-icons/md'

export const Nav = () => {
	const route = useRouter()
	const [showResponsive, setShowResponsive] = useState(false)
	const classMobile = showResponsive ? 'responsive' : ''

	const handleChangeView = (event) => {
		event.preventDefault()
		setShowResponsive(!showResponsive)
	}

	return (
		<div className={`nav ${classMobile}`} >
			<Link href="/">
				<a href="" className={route.pathname == '/' ? 'active' : ''}>
					Rick y Morty
				</a>
			</Link>
			<Link href="/characters">
				<a href="" className={route.pathname == '/characters' ? 'active' : ''}>
					Personajes
				</a>
			</Link>
			<Link href="/locations">
				<a href="" className={route.pathname == '/locations' ? 'active' : ''}>
					Dimensiones
				</a>
			</Link>
			<a href="" className='icon' onClick={handleChangeView}>
				<MdFormatAlignCenter />
			</a>
		</div >
	)
}