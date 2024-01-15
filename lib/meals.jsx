import sql from 'better-sqlite3'

const db = sql('meals.db')

export function getMeals() {
	// This is a extra delay that it was added for demonstration, you normally don't do that but you can
	//await new Promise((resolve) => setTimeout(resolve, 2000))
	return db.prepare('SELECT * FROM meals').all()
}
