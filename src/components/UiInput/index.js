export const UiInput = ({
    type = 'text', id, label, name, placeholder, autoFocus, autoComplete, register, error, className,
}) => {
    return (
        <div className = { `ui-input ${className}` }>
            <label htmlFor = { id }>{ label }</label>
            <input
                id = { id }
                name = { name }
                type = { type }
                placeholder = { placeholder }
                { ...{ autoFocus, autoComplete } }
                { ...register } />
            { error && <div className = 'ui-input__error-message'>{ error.message }</div> }
        </div>
    );
};
