import { NavBar } from './NavBar'
import iconLogo from '../assets/images/logo.svg' 

export const Header = () => {
	return (
		<header className="flex place-content-between items-center mb-8">
			<img src={iconLogo} alt='Icon Logo' />
			<NavBar />
		</header>
	)
}