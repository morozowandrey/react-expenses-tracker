import { Fragment, useState, useEffect, useCallback } from 'react'

import MealsSummary from './MealsSummury'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMealsHendler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(
        'https://react-http-f112f-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      )
      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      const data = await res.json()
      let loadedMeals = []

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }
      setMeals(loadedMeals)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)

  }, [])

  useEffect(() => {
    fetchMealsHendler()
  }, [fetchMealsHendler])

  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals meals={meals} isLoading={isLoading} error={error} />
    </Fragment>
  )
}

export default Meals
