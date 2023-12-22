import React, {useState} from 'react';
import classes from "./modal.module.css";
import Input from "../input/Input";

const Modal = ({children,handleOpen}) => {
    const [inputValue,setInputValue] = useState()
    console.log(inputValue)

    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}
                <Input
                    placeholder='Enter text'
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button onClick={handleOpen}>close</button>
            </div>
        </>
    );
};

export default Modal;