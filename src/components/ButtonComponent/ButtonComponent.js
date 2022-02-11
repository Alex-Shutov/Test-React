import React from 'react';
import cls from 'classnames'

import style from './style.css'

const ButtonComponent = ({className,onCkickHandler}) => {

    const classCls = cls(className, style.buttonComponent)
    return (
        <div className={classCls}>
            <button
            type={'submit'}
            >
                Добавить
            </button>
        </div>
    );
};

export default ButtonComponent;
