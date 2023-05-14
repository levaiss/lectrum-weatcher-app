export const UiInput = ({
    type = 'text',
    id,
    label,
    value,
    name,
    placeholder,
    autoFocus,
    autoComplete,
    disabled,
    register,
    error,
    className,
}) => {
    const getClassName = () => {
        let result = 'ui-input';

        if (type) {
            result += ` ui-input--${type}`;
        }

        if (disabled) {
            result += ' ui-input--disabled';
        }

        if (className) {
            result += ` ${className}`;
        }

        return result;
    };

    return (
        <div className = { getClassName() }>
            <label htmlFor = { id }>
                { label }
                <input
                    id = { id }
                    name = { name }
                    type = { type }
                    value = { value }
                    placeholder = { placeholder }
                    disabled = { disabled }
                    { ...{ autoFocus, autoComplete } }
                    { ...register } />
                { type === 'radio' && <span className = 'ui-input__radio'></span> }
            </label>
            { error && <div className = 'ui-input__error-message'>{ error.message }</div> }
        </div>
    );
};
