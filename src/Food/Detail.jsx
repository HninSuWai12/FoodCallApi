import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {AiFillYoutube} from 'react-icons/ai'
const Detail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  const getSingleMeal = async () => {
    try {
      const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      // Assuming that the API response contains a meal object
      setMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  // Create an effect to fetch meal data when the component mounts
  useEffect(() => {
   

    getSingleMeal();
  }, []); // Include 'id' in the dependencies array to re-fetch data when the ID changes

  return (
    <div>
     <img src={meal.strMealThumb} alt="" width={"500px"} className='rounded-xl shadow-xl ' />
     <div className="text-white bg-pink-500 w-20 text-center text-sm rounded-lg mt-2">
      {meal.strCategory}
     </div>
     <h3>{meal.strMeal}</h3>
     <div className="">
      <h2>Instractions</h2>
      <p>{meal.strInstructions}</p>

     </div>
    <div className="flex gap-5 items-center">
      <p className='text-gray-500 '>Watch on Youtube</p>
    <a href={meal.strYoutube}>
      <AiFillYoutube className='text-red-600 text-4xl cursor-pointer'/>
     </a>
    </div>
    </div>
  );
};

export default Detail;
