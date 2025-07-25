import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'


export const cn = (...input) => {
    return twMerge(clsx(input))
}