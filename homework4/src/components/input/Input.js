import React from 'react';


const Input = ({type='text',name, onChange,placeholder}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
        />
    );
};

export default Input;
