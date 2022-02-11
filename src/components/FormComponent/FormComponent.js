import React, {useState} from 'react';
import InputComponent from "../InputComponent/InputComponent";
import { Formik, Form } from 'formik'

import style from './style.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const FormComponent = ({onSubmitForm,initValues,setValues}) => {


    // const handlerSubmitForm = () => {
    //     const data = new FormData()
    //     for (let value in initList) {
    //         data.append(value, initList[value]);
    //     }
    //     data.append('token',`${new Date().getTime()}_Pref${initList.name}_${initList.age}`)
    // }

    const handleChange = (value, key) => {
        let editedData = {
            ...initValues,
        }
        editedData[key] = value

        setValues(editedData)
    }

    return (
        <Formik
        initialValues={initValues}
        onSubmit={onSubmitForm}
        >
        <Form className={style.MainContent}>
            <div className={style.inputContent}>
            <InputComponent
                onChange = {(e) => handleChange(e.target.value,'name')}
                name = {'name'}
                className = {style.inputText}
                type = {'text'}
            placeholder = {'Имя'}
            />
            <InputComponent
                onChange = {(e) => handleChange(e.target.value,'age')}
                name = {'age'}
                className = {style.inputNumber}
                type = {'number'}
                placeholder = {'Возраст'}
            />
            <InputComponent
                onChange = {(e) => handleChange(e.target.value,'debt')}
                name = {'debt'}
                className = {style.inputNumber}
                type = {'number'}
                placeholder = {'Сколько должен: '}
            />
            <InputComponent
                onChange = {(e) => handleChange(e.target.value,'choose')}
                name = {'choose'}
                className = {style.inputNumber}
                type = {'number'}
                placeholder = {'Сколько взял: '}
            />
            </div>
            <div className={style.buttonContent}>
            <ButtonComponent
            />
            </div>
        </Form>
        </Formik>
    );
};

export default FormComponent;
