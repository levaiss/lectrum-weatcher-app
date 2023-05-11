// Core
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// Store
import { useStore } from '../../../hooks/useStore';

// Instruments
import { api } from '../../../api';

export function useForecast() {
    console.log('useForecast');
    const [
        currentForecast,
        setCurrentForecast,
    ] = useState([]);
    const {
        weatherStore: {
            isFiltered,
            filteredDays,
            selectedDayId,
            setSelectedDayId,
        },
    } = useStore();
    const {
        isSuccess,
        data: forecastData,
    } = useQuery({
        queryKey: ['forecast'],
        queryFn:  () => {
            return api.getWeather();
        },
    });
    const selectedDay = currentForecast.find(({ id }) => id === selectedDayId);
    const updateCurrentForecast = (forecast) => {
        const forecastWithLimit = forecast.splice(0, 7);
        if (forecastWithLimit?.length) {
            const firstDay = forecastWithLimit[ 0 ];
            setCurrentForecast(forecastWithLimit);
            setSelectedDayId(firstDay.id);
        }
    };
    const filterCurrentForecast = (forecast) => {
        if (!Array.isArray(forecast)) {
            return false;
        }
        console.log('filterCurrentForecast');
        updateCurrentForecast(filteredDays(forecast));
    };

    useEffect(() => {
        console.log('useEffect');
        filterCurrentForecast(forecastData);
    }, [isSuccess, isFiltered]);

    return {
        selectedDay,
        selectDayById: setSelectedDayId,
        currentForecast,
    };
}
