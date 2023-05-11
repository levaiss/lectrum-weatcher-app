// Instruments
import { formatDate } from '../../../../utils/format-date';

export const CurrentWeather = ({ day }) => {
    if (!day) {
        return null;
    }

    return (
        <>
            <div className = 'head'>
                <div className = { `icon ${day.type}` }></div>
                <div className = 'current-date'>
                    <p>{ formatDate(day.day, 'eeee') }</p>
                    <p>{ formatDate(day.day, 'd LLLL') }</p>
                </div>
            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>
                    { day.temperature }
                </p>
                <p className = 'meta'>
                    <span className = 'rainy'>
                       % { day.rain_probability }
                    </span>
                    <span className = 'humidity'>
                       % { day.humidity }
                    </span>
                </p>
            </div>
        </>
    );
};
