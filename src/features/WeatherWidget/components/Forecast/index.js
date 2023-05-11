// Components
import { ForecastDay } from '../ForecastDay';

export const Forecast = (
    {
        days,
        selectedDay,
        selectDay,
    },
) => {
    return (
        <div className = 'forecast'>
            <>
                {
                    Array.isArray(days) && days.map((day) => <ForecastDay
                        key = { day.id }
                        day = { day }
                        selected = { selectedDay.id === day.id }
                        selectDay = { selectDay } />)
                }
            </>
        </div>
    );
};
