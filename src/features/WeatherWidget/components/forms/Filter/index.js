// Core
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Hooks
import { useStore } from '../../../../../hooks/useStore';

// Components
import { UiInput } from '../../../../../components/UiInput';

// Instruments
import { FilterFormSchema } from './config';

export const Filter = observer(() => {
    const {
        weatherStore: {
            isFormBlocked,
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
            minTemperature: null,
            maxTemperature: null,
        },
    });

    const submitForm = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form
            onSubmit = { submitForm }
            className = 'filter'>
            <span className = 'checkbox'>Сонячно</span>
            <span className = 'checkbox'>Хмарно</span>
            <span className = 'checkbox'>Дождь</span>
            <UiInput
                id = 'min-temperature'
                type = 'number'
                label = 'Мінімальна температура'
                className = 'custom-input'
                error = { formState.errors.minTemperature }
                register = { register('minTemperature') } />
            <UiInput
                id = 'max-temperature'
                type = 'number'
                label = 'Максимальна температура'
                className = 'custom-input'
                error = { formState.errors.maxTemperature }
                register = { register('maxTemperature') } />
            <button
                type = 'submit'
                disabled = { isFormBlocked }>
                Відфільтрувати
            </button>
        </form>
    );
});
