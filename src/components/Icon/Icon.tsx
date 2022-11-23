import React from "react";
import { Box } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion,
         faSun,
         faMoon,
         faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
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
                    iconName === 'lamp' ?
                    faLightbulb :
                    iconName === 'github' ?
                    faGithub :
                    iconName === 'linkedin' ?
                    faLinkedin :
                    iconName === 'whatsapp' ?
                    faWhatsapp :
                    faQuestion
                }
                fontSize={Size}
            />
        </Box>
    )
}