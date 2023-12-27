import './App.css';
import React from "react";
import {useState} from "react";

export default function Form() {

    const [form,setForm] = useState({
        firstName: 'Kolya',
        lastName: 'Butkevich',
        phoneNumber: '+996 708 825 165'
    });


    // return (
        // <>
        //
        //     <label>
        //         First name:
        //         <input value={form.firstName} onChange={e => {
        //             setForm({
        //                 ...form,
        //                 firstName: e.target.value
        //             })
        //         }}/>
        //     </label>
        //     <label>
        //     Last name:
        //     <input value={form.lastName} onChange={e => {
        //         setForm({
        //             ...form,
        //             lastName: e.target.value
        //         })
        //     }}/>
        // </label>
        //     <label>
        //         Phone number:
        //         <input value={form.phoneNumber} onChange={e => {
        //             setForm({
        //                 ...form,
        //                 phoneNumber: e.target.value
        //             })
        //         }}/>
        //     </label>
        //     <p>
        //         {form.firstName}{' '}
        //         {form.lastName}{' '}
        //         {form.phoneNumber}
        //     </p>
        // </>
    // )
}
