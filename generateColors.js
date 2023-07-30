import colors from './src/lib/colors.js'
import Values from 'values.js'

export default function generateColors(){
    let extended = {};
    Object.keys(colors).forEach(key => {
        const color = new Values(colors[key])
        extended[key] = {
            50: 'rgb(' + color.tint(60).rgb +')',
            100: 'rgb(' + color.tint(45).rgb +')',
            200: 'rgb(' + color.tint(35).rgb +')',
            300: 'rgb(' + color.tint(25).rgb +')',
            400: 'rgb(' + color.tint(15).rgb +')',
            500: 'rgb(' + color.rgb +')',
            600: 'rgb(' + color.shade(10).rgb +')',
            700: 'rgb(' + color.shade(25).rgb +')',
            800: 'rgb(' + color.shade(35).rgb +')',
            900: 'rgb(' + color.shade(50).rgb +')',
        }

    })
    return extended;
}

export const customColorSafelistPattern = () => {
    return new RegExp('bg-('+Object.keys(colors).join('|')+')-+')
}