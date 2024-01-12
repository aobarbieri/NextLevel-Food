import Link from 'next/link'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import logo from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
	return (
		<>
			<header className={classes.header}>
				<Link className={classes.logo} href='/'>
					{/* this imported logo will be an object where the path of the image will be under the .src 
                However, a better approach is to use Image component that is provided by Next.js*/}
					{/* <img src={logo.src} alt='A plate with food on it' /> */}
					<Image src={logo} alt='A plate with food on it' priority />
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
			<MainHeaderBackground />
		</>
	)
}
