// Core
import { observer } from 'mobx-react-lite';

// Components
import { Filter } from './components/forms/Filter';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';

// Hooks
import { useForecast } from './hooks/useForecast';

export const WeatherWidget = observer(() => {
    const {
        selectedDay,
        selectDayById,
        currentForecast,
    } = useForecast();

    return (
        <>
            <Filter />
            <CurrentWeather
                day = { selectedDay } />
            <Forecast
                days = { currentForecast }
                selectedDay = { selectedDay }
                selectDay = { selectDayById } />
        </>
    );
});
