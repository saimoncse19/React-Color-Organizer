import React, {useState, createContext, useContext} from 'react';
import colorsData from "../data/colors.json"
import {v4} from "uuid"

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export function ColorProvider({children}) {
    const [colors, setColors] = useState(colorsData);

    const addColor = (title, color) => {
        setColors(
            [
                ...colors,
                {
                    id: v4(),
                    rating: 0,
                    title,
                    color
                }
            ]
        )
    }

    const removeColor = (id) => setColors(colors.filter(color => color.id !== id));

    const rateColor = (id, rating) => setColors(colors.map(color => color.id === id? {...color, rating}: color))

    return (
        <ColorContext.Provider value={{colors, addColor, removeColor, rateColor}}>

        {children}
        
        </ColorContext.Provider>
    )
}
