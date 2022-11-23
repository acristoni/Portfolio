import React from "react";
import { Box } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion,
         faSun,
         faMoon } from '@fortawesome/free-solid-svg-icons'

type Props = {
    iconName: string,
    size?: number,
    color?: string
}

export function Icon ({iconName, size, color}: Props) {
    let Size = '20px'
    let Color = 'color.black'

    if (size) {
        Size = `${size}px`
    } 
    
    if (color) {
        Color = `color.${color}`
    }

    return (
        <Box color="colors.text">
            <FontAwesomeIcon 
                icon={
                    iconName === 'sun' ?
                    faSun :
                    iconName === 'moon' ?
                    faMoon :
                    faQuestion
                }
                fontSize={Size}
            />
        </Box>
    )
}