import React, { useCallback, useEffect, useState } from 'react'
import css from "./form.module.css"
import { useRecoilState } from 'recoil'
import { warn } from '../Global/Atom'


const TextBox = ({
    Type,
    PlaceHolder, 
    onChange,
    iD,
    labelText,
    maxLength,
    enablePassword,
    accept,
    isText,
    isNumber,
    name,
    required
}) => {
    const [warning, setWarning] = useState()
    const [password, setPassword] = useState(enablePassword)
    const [type, setType] = useState(Type)

    const handleInput = useCallback((e) => {
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let target = e.target.value
        if (type == "email") {
            if (target == '' && required) {
                setWarning("You must have to fill this field")
                onChange(null)
            }
            else {
                if (!target.match(regexEmail)) {
                    setWarning("Enter valid Email Address")
                    onChange(null)
                }
                else {
                    setWarning("")
                    onChange(target)
                }
            }
        }
        //password 
        if (type == "password") {
            if (target == '' && required) {
                setWarning("You must have to fill this field")
                onChange(null)
            }
            else {
                let target = e.target.value
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (!target.match(passwordRegex)) {
                    setWarning("Password must include one upper/lowercase, digit,special char, min 8 chars.")
                    onChange(null)
                }
                else {
                    onChange(target)
                    setWarning("")
                }
            }
        }

        if (type == "text") {
            if (target == '' && required) {
                setWarning("You must have to fill this field")
            }
            else {
                setWarning("")
                onChange(target)
            }
        }
        
        const textRegex = /^[^\d]+$/;
        if (isNumber) {
            if (!target.match(textRegex)) {
                setWarning("Please enter a valid text without numbers.")
                onChange(null);
            }
            else {
                onChange(target)
                setWarning("")
    c        }
        }
        const numberRegex = /^-?\d*\.?\d+$/;
        if (isText) {
            if (!target.match(numberRegex)) {
                setWarning("Please enter a valid Number without text.")
                onChange(null);
            }
            else {
                onChange(target)
                setWarning("")
            }
        }

    }, [])


    const handlePassword = useCallback(() => {
        if (type == "password") {
            setType((prev) => {
                if (prev == type) {
                    setType("text")
                }
                else {
                    setType("password")
                }
            })

        }
    }, [])


    const handleNumberKeys = useCallback((event) => {
        

    }, [])

    return (
        <>
            <div className={css.inputBox}>
                <div className={css.inputDiv}>
                    <label htmlFor="" className={css.label}>{labelText}</label>
                    <input
                        type={type}
                        onBlur={handleInput}
                        className={warning ? `${css.input} ${css.warn}` : css.input}
                        placeholder={PlaceHolder}
                        id={iD}
                        name={name}
                        maxLength={maxLength}
                        accept={accept}
                        required={required}
                        onChange={handleNumberKeys}
                    />
                    {password && <span className={css.password} onClick={handlePassword}>
                        <i className={type === 'password' ? `fa fa-eye hand` : `fa fa-eye-slash hand`}>
                        </i>
                    </span>}
                </div>
                <span className={css.warning}>{warning}</span>
            </div>
        </>
    )
}

export default TextBox