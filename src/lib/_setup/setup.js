import colors from "./colors.js";
import Values from "values.js";
import { writeFileSync, readFileSync } from 'fs';


// 1. colors
const generatedColors = generateColors();
let cssFile = readFileSync(new URL('../../app.css', import.meta.url), 'utf8');
cssFile = cssFile.replace(/@theme.*\{[^\}]*/m, "@theme{\n" + generatedColors.variableString)
cssFile = cssFile.replace(/@source inline\([^;]*/m, '@source inline("bg-{' + generatedColors.names.join(",") +'}-{50,{100..900..100},950}")')

writeFileSync(new URL('../../app.css', import.meta.url), cssFile)

console.log({generatedColors})

function generateColors(){
    let extended = [];
    let variableString = '';
    let names = [];
    Object.keys(colors).forEach(key => {
        names.push(key);
        const color = new Values(colors[key])
        extended.push({
            variable: '--color-' + key,
            shades: {
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
    })
    extended.forEach(palette => {
        [50,100,200,300,400,500,600,700,800,900].forEach(shade => {
            variableString += ` ${palette.variable}-${shade}: ${palette.shades[shade]};\n`
        })
    })
    return {variableString, names};
}