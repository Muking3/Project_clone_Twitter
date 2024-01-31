import numeral from 'numeral'

export const formattedNumber = (number) => {
    return numeral(number).format('0a');
}