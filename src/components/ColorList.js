import React from 'react'
import Color from "./Color"
import { useColors} from "../hooks/ColorHooks"

export default function ColorList() {

    const { colors } = useColors();

    if (!colors.length) return <div>No colors...</div>
    return (

        
        <div className="color-list">
            {
                colors.map((color, _) => 
                <Color key={color.id} {...color} /> )
            }
        
        </div>
        
        
    )
}
