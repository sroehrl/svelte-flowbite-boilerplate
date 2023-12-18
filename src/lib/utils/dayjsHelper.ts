import type LenkradDate from "$lib/_types/LenkradDate";
import dayjs from "dayjs";

export const dayjsSetter = (date: string|LenkradDate) => {
    if(typeof date === 'string'){
        return dayjs(date)
    }
    return dayjs(date.value)
}