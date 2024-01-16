import classes from './loading.module.css'

export default function MealsLoadingPage() {
	return <p className={classes.loading}>Fetching meals ...</p>
}

// Loading is a reserve file name, Next.js picks it up and run without we having to connect anything else
// -out added so Next.js will ignore it. Remove out if you want this loading to work
