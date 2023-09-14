import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loading from '../Loading/Loading';
const Menu = () => {
  const [isLoading , setIsLoading] = useState(true);
    const [meals , setMeals]= useState([])
    const getMeals= async ()=>{
       try{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
       // console.log(data.meals);
        setMeals(data.meals);
        setIsLoading(false);
       }catch(error){
        console.error('Error fatching data:' , error);
       }
    }
    useEffect(()=>{
        getMeals()
    },[])
  return (
   <>
   {isLoading?(
    <Loading/>
   ):
   (
    <div className='flex flex-wrap gap-5 justify-center items-center'>
    {meals?.map(meal=> 
    <Card key={meal.idMeal} meal={meal}/>
    )}
</div>
   )
  }
   </>
  )
}

export default Menu