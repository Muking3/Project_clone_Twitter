import moment from 'moment'
import numeral from 'numeral'


export const time = moment().format("HH:mm");

export const Alltime = (number) => {
    const duration = moment.duration(number);
    const startTime = moment().startOf('month');
    const resultTime = startTime.add(duration);
    return resultTime.format("ddd-MM hh:mm");
}

export const formattedNumber = (number) => {
    return numeral(number).format('0a');
}