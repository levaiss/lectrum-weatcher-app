import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatDate = (date, formatStr = 'PP') => {
    return format(date, formatStr, {
        locale: uk,
    });
};
