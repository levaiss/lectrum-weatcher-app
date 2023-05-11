/* Core */
import * as yup from 'yup';

export const FilterFormSchema = yup.object().shape({
    minTemperature: yup.number().typeError('Температура має бути числовим значенням').nullable(true)
        // eslint-disable-next-line no-template-curly-in-string
        .min(-256, 'Мінімальна значенная ${min} градусів')
        // eslint-disable-next-line no-template-curly-in-string
        .max(256, 'Максимальне значенная ${max} градусів'),
    maxTemperature: yup.number().typeError('Температура має бути числовим значенням').nullable(true)
        // eslint-disable-next-line no-template-curly-in-string
        .min(-256, 'Мінімальна значенная ${min} градусів')
        // eslint-disable-next-line no-template-curly-in-string
        .max(256, 'Максимальне значенная ${max} градусів')
        .moreThan(yup.ref('minTemperature'), 'Максимальне значення, не може бути меньше за мінімальне'),
});
