import React from 'react';
import Star from "./Star"


export default function StarRating({numStars=5, selectedStars, onChangeStar=f=>f}) {

    const createArray = length => [...Array(length)]
    return (

        <>
            {
                createArray(numStars).map((_, idx) => 
                    <Star selected={selectedStars > idx} key={idx} changeStar={() => onChangeStar(idx+1)} />
                )
            }

            <p>{selectedStars} of {numStars} stars</p>

        </>
        
    )
}
