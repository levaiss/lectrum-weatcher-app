// Instruments
import { formatDate } from '../../../../utils/format-date';

export const ForecastDay = ({ day, selected = false, selectDay }) => {
    const className = () => {
        let result = 'day';

        if (day.type) {
            result += ` ${day.type}`;
        }

        if (selected) {
            result += ' selected';
        }

        return result;
    };
    const handlerOnSelectCurrentDay = () => {
        if (selected) {
            return false;
        }

        selectDay(day.id);
    };

    return (
        <div
            onClick = { handlerOnSelectCurrentDay }
            className = { className() }>
            <p>
                { formatDate(day.day, 'eeee') }
            </p>
            <span>
                { day.temperature }
            </span>
        </div>
    );
};
