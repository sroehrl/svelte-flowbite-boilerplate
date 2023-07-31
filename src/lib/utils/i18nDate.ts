import dayjs from "dayjs";

export enum Language {
    de = 'de',
    en = 'en'
}
export const setLocale = async (lang: Language) => {
    await import(`dayjs/locale/de`)
    dayjs.locale(lang)
}

export const i18nDateFormat = (lang: Language) => {
    switch (lang){
        case 'de': return 'DD.MM.YYYY'
    }
    return 'MM/DD/YYYY'
}
