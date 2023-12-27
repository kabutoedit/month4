import React from 'react';
import classes from './modal.module.css';
import Input from '../input/Input';


const Modal = ({handleOpen, handleTextInput,handleAdd}) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>

                <button onClick={handleOpen} className={classes.btn}>Закрыть</button>

                <Input
                    name={'add'}
                    placeholder={'ФИО'}
                    onChange={handleTextInput}/>

                <Input
                    name={'add'}
                    type={'number'}
                    placeholder={'Возраст'}
                    onChange={handleTextInput}/>

                <Input
                    name={'add'}
                    type={'email'}
                    placeholder={'электронная почта'}
                    onChange={handleTextInput}/>

                <Input
                    name={'add'}
                    type={'number'}
                    placeholder={'номер телефона'}
                    onChange={handleTextInput}/>

                <button onClick={handleAdd} className={classes.btn}>Добавить</button>

            </div>
        </>
    );
};

export default Modal;