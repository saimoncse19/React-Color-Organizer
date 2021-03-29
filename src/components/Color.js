import React from 'react';
import StarRating from "./StarRating"
import {FaTrash} from "react-icons/fa"
import { useColors } from "../hooks/ColorHooks"

export default function Color({id, title, color, rating}) {

    const {removeColor, rateColor } = useColors();
    return (
        <section>

        <h1>{title}</h1>

        <button onClick={()=> removeColor(id)}>
        <FaTrash />
        
        </button>

        <div style={{height:50, backgroundColor: color}}>
        </div>
        <StarRating selectedStars={rating} onChangeStar={rating2 => rateColor(id, rating2)}/>
        
        </section>
        
    )
}
