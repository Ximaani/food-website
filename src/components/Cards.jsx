import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

const Cards = ({ item }) => {
    
    const [isHeartFillted, setiIsHeartFillted] = useState(false);

    const handleHeartClick = () => {
        setiIsHeartFillted(!isHeartFillted);
    }

    return (
        

            <div to={`/menu/${item._id}`} className="card w-[350px] md:w-64 xl:w-80 lg:w-80 sm:w-64 md:mb-2 sm:mx-auto mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto md:mx-auto bg-base-100 shadow-xl relative">

                <div className={`rating gap-1 absolute right-2 top-1 p-4 heartStar bg-green ${isHeartFillted ? "text-rose-500" : "text-white"}`}
                onClick={handleHeartClick}>
                    <FaHeart className='h-5 w-5 cursor-pointer'/>
                </div>

                <Link to={`/menu/${item._id}`}>
                <figure><img src={item.image} alt=""
                className='hover:scale-105 transition-all duration-200 md:h-64' /></figure>
                </Link>
                <div className="card-body">

                    <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}</h2></Link>

                    <p>Description of the item</p>

                    <div className="card-actions justify-between items-center mt-2">
                        <h5 className='font-semibold'><span className='text-sm text-red'>$</span>{item.price}</h5>
                        <button className="btn bg-green text-white">Buy Now</button>
                    </div>

                </div>
            </div>
    );
};

export default Cards