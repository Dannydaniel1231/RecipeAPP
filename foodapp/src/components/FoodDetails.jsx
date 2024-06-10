import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

export default function FoodDeltails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "d385f0b48a6d44a38f06ff5d6c92916e";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  });
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "Vegetarian" : "None-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          $
          <span>
            {food.pricePerServing / 100} Per Serving<strong></strong>
          </span>
        </div>
      </div>
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
