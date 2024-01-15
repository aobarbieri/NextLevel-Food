import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'

export default function Meals() {
	// if you want to use the code below as async add async before the keyword function above and add await before the getMeals() call below
	const meals = getMeals()

	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created <span className={classes.highlight}>by you</span>
				</h1>
				<p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
				<p className={classes.cta}>
					<Link href='/meals/share'>Share Your Favorite Recipe</Link>
				</p>
			</header>

			<main className={classes.main}>
				<MealsGrid meals={meals} />
			</main>
		</>
	)
}

// In a regular REACT app, we would use useEffect/fetch to reach out to the DB
// With Next.js the DB is already integrated so we can reach out to the data directly - all components are server component unless you specify it to be client component.
// Check ->
