import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className='w-72 border-2 flex justify-center items-center flex-col p-5 rounded-xl gap-5 shadow-lg hover:scale-105 transi duration-200'>
        <img src={meal.strMealThumb} alt="" className='rounded-xl' width="200px" />
        <h3>{meal.strMeal}</h3>
       <Link to={`/detail/${meal.idMeal}`}>
       <button className='  text-white rounded-xl bg-blue-500 px-10 py-2'><AiFillEye className='text-2xl'/></button>
       </Link>
    </div>
  )
}

export default Card