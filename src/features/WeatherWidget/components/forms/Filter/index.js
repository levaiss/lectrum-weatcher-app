// Core
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Hooks
import { useStore } from '../../../../../hooks/useStore';

// Components
import { UiInput } from '../../../../../components/Ui/UiInput';

// Instruments
import { WEATHER_TYPES } from '../../../../../const/weather-types';
import { FilterFormSchema } from './config';

export const Filter = observer(() => {
    const {
        weatherStore: {
            isFiltered,
            isFormBlocked,
            setType,
            setMinTemperature,
            setMaxTemperature,
            applyFilter,
            resetFilter,
        },
    } = useStore();
    const {
        handleSubmit,
        formState,
        register,
        reset,
    } = useForm({
        mode:          'onChange',
        resolver:      yupResolver(FilterFormSchema),
        defaultValues: {
            type:           null,
            minTemperature: null,
            maxTemperature: null,
        },
    });

    const submitForm = handleSubmit((data) => {
        applyFilter(data);
    });
    const resetForm = () => {
        reset();
        resetFilter();
    };

    return (
        <form
            onSubmit = { submitForm }
            className = 'filter'>
            <>
                {
                    Object.keys(WEATHER_TYPES).map((type) => {
                        const label = WEATHER_TYPES[ type ];

                        return <UiInput
                            key = { type }
                            id = { `type-${type}` }
                            name = 'weather-type'
                            type = 'radio'
                            value = { type }
                            label = { label }
                            disabled = { isFiltered }
                            error = { formState.errors.type }
                            register = { register('type', {
                                onChange: (event) => {
                                    setType(event.target.value);
                                },
                            }) } />;
                    })
                }
            </>
            <UiInput
                id = 'min-temperature'
                type = 'number'
                label = 'Мінімальна температура'
                disabled = { isFiltered }
                error = { formState.errors.minTemperature }
                register = { register('minTemperature', {
                    onChange: (event) => {
                        setMinTemperature(Number(event.target.value));
                    },
                }) } />
            <UiInput
                id = 'max-temperature'
                type = 'number'
                label = 'Максимальна температура'
                disabled = { isFiltered }
                error = { formState.errors.maxTemperature }
                register = { register('maxTemperature', {
                    onChange: (event) => {
                        setMaxTemperature(Number(event.target.value));
                    },
                }) } />
            {
                isFiltered
                    ? <button
                        type = 'button'
                        className = 'ui-button'
                        onClick = { () => resetForm() }>
                        Скинути
                    </button>
                    : <button
                        type = 'submit'
                        disabled = { isFormBlocked }
                        className = 'ui-button'>
                        Відфільтрувати
                    </button>
            }
        </form>
    );
});
