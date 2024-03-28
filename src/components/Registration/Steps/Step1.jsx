import React, { useEffect, useState } from 'react'
import Stepper from '../Stepper'
import TextBox from '../../../Form/TextBox'
import { useRecoilState } from 'recoil';
import { formData } from '../../../Global/Atom';
import { toast } from 'react-toastify';
const Step1 = ({ setStep, count }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [data, setData] = useRecoilState(formData);

    const handleNext = () => {
        if (email && password && confirmPassword) {
            if (password !== confirmPassword) {
                toast.warning("Password does not match")
            }
            else{
                setData({ ...data, "email": email, "password": password })
                setStep("step2")
            }
        }
        else{
            toast.error("Fill the Form");
        }
    }
    
    useEffect(() => {
        count(0);
    }, [])
    return (
        <>

            <span className='fw-bolder text-info'>Create your credentials.</span>
            <p className='p fw-bolder '>All fields are mandatory to proceed to the next step.</p>
            <TextBox
                PlaceHolder={"Email"}
                Type={"email"}
                labelText={"Email :"}
                iD={"email"}
                onChange={setEmail}
                name={"email"}
                required={true}
            />
            <TextBox
                PlaceHolder={"Password"}
                Type={"password"}
                labelText={"Password :"}
                enablePassword={true}
                iD={"password"}
                onChange={setPassword}
                minLength={8}
                required={true}
                name={"password"}
                accept={"mail"}
            />
            <TextBox
                PlaceHolder={"Confirm Password"}
                Type={"password"}
                labelText={"Confirm Password :"}
                enablePassword={true}
                iD={"confirmPassword"}
                onChange={setConfirmPassword}
                required={true}
                name={"confirmPassword"}
                accept={"mail"}
            />
            <div className='d-flex gap-2  mt-4'>
                <button className='btn btn-info  w-100 p-2' onClick={handleNext}>Next</button>
            </div>
        </>
    )
}

export default Step1