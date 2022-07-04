import { Nav } from '..'

export const Layout = ({ children }) => {
	return (
		<div className="grid-container">
			<Nav />
			{children}
		</div>
	)
}
