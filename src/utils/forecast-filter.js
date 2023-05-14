/**
 * Function filtered day by current filter state
 * @param {Array} days - list of days
 * @param {Object} filters - filters
 * @param {String} filters.type - type of dat
 * @param {Number} filters.minTemperature - min temperature of day
 * @param {Number} filters.maxTemperature - max temperature of day
 * @returns {Array<Object>} - filtered days
 */
export function getFilteredForecast(days, filters) {
    const {
        type,
        minTemperature,
        maxTemperature,
    } = filters;

    return  days.filter((day) => {
        const {
            type: dayType,
            temperature,
        } = day;

        const isCorrectType = type
            ? type === dayType
            : true;
        const isCorrectMinTemperature = minTemperature
            ? minTemperature <= temperature
            : true;
        const isCorrectMaxTemperature = maxTemperature
            ? maxTemperature >= temperature
            : true;

        return (
            isCorrectType
            && isCorrectMinTemperature
            && isCorrectMaxTemperature
        );
    });
}
