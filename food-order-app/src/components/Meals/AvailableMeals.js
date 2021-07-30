import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = (props) => {
  const mealsList = props.meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ))

  let content = null

  if (props.error) {
    content = <p>{props.error}</p>
  }

  if (props.isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <section className={classes.meals}>
      <Card>
        {content}
        {props.meals.length > 0 && <ul>{mealsList}</ul>}
      </Card>
    </section>
  )
}

export default AvailableMeals
