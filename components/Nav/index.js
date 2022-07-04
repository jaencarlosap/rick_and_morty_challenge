import Link from "next/link";
import { MdFormatAlignCenter } from "react-icons/md";
import '../../assets/css/nav.module.css';

export const Nav = () => {

	const responseNav = () => {
		let nav = document.getElementsByClassName("nav")[0];
		if (nav.className === "nav") {
			nav.className += " responsive";
		} else {
			nav.className = "nav";
		}
	}

	return (
		<div className="nav" >
			<Link href="/"> Rick y Morty</Link>
			{/* {pages.map((page, index) => {
				return <Link key={"link_" + index} to={page.path} className={location.pathname === page.path ? "active" : ""}>{page.label}</Link>
			})} */}
			<Link href="/characters">
				Personajes
			</Link>
			<Link href="/locations">
				Dimensiones
			</Link>
			<Link href="/" className="icon">
				<MdFormatAlignCenter />
			</Link>
		</div >
	)
}