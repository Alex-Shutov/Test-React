import React from 'react';
import cls from 'classnames'

import style from './style.css'
import classNames from "classnames";



const InputComponent = (props) => {

    const classname = classNames(props.className, style.inputContainer)

    return (
        <div className={classname}>
            <input
                onChange={props.onChange}
                name={props.name}
                required type={props.type || 'text'}
                placeholder={props.placeholder || ''}/>

        </div>
    );
};

export default InputComponent;
