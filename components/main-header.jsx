import Link from 'next/link'
import logo from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<Link className={classes.logo} href='/'>
				{/* this imported logo will be a object where the path of the image will be under the .src */}
				<img src={logo.src} alt='A plate with food on it' />
				NextLevel Food
			</Link>

			<nav className={classes.nav}>
				<ul>
					<li>
						<Link href='/meals'>Browse Meals</Link>
					</li>
					<li>
						<Link href='/community'>Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
