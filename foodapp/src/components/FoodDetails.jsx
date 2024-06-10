import { useEffect, useState } from "react";

export default function FoodDeltails({ foodId }) {
  const [food, setFood] =useState({})
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "d385f0b48a6d44a38f06ff5d6c92916e";
  useEffect(()=>
  {
    async function fetchFood(){
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data)
      setFood(data);
    }
    fetchFood()
  })
  return (
    <div>
      Food Details{foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}