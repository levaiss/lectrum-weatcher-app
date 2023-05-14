// Core
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// Store
import { useStore } from '../../../hooks/useStore';

// Instruments
import { api } from '../../../api';
import { getFilteredForecast } from '../../../utils/forecast-filter';

export function useForecast() {
    const [
        currentForecast,
        setCurrentForecast,
    ] = useState([]);
    const {
        weatherStore: {
            isFiltered,
            filters,
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
        let firstDayId;
        if (forecastWithLimit?.length) {
            firstDayId = forecastWithLimit[ 0 ].id;
        } else {
            firstDayId = '';
        }
        setSelectedDayId(firstDayId);
        setCurrentForecast(forecastWithLimit);
    };
    const filterCurrentForecast = (forecast) => {
        if (!Array.isArray(forecast)) {
            return false;
        }
        updateCurrentForecast(getFilteredForecast(forecast, filters));
    };

    useEffect(() => {
        filterCurrentForecast(forecastData);
    }, [isSuccess, isFiltered]);

    return {
        selectedDay,
        selectDayById: setSelectedDayId,
        currentForecast,
    };
}
