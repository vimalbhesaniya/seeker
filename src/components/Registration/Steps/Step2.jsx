import React, { useEffect, useState } from 'react'
import Stepper from '../Stepper'
import TextBox from '../../../Form/TextBox'
import { useRecoilState } from 'recoil';
import { formData } from '../../../Global/Atom';
import { toast } from 'react-toastify';
const Step2 = ({ setStep, count }) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [profileImage, setProfileImage] = useState();
    const [data, setData] = useRecoilState(formData);

    console.log(firstName , lastName);

    const handleNext = () => {
        if (firstName && lastName) {
            setData({ ...data, "firstName": firstName, "lastName": lastName })
            setStep("step3");
        }
        else{
            toast.error("Fill the Form");
        }
    }

    useEffect(() => {
        count(10)
    }, [])
    return (
        <>
            <span className='fw-bolder text-info'>Give your Firstname Lastname.</span>
            <p className='p fw-bolder '>All fields are mandatory to proceed to the next step.</p>
            <TextBox
                PlaceHolder={"First Name"}
                Type={"text"}
                labelText={"First Name :"}
                iD={"firstName"}
                isNumber={true}
                onChange={setFirstName}
                name={"firstName"}
                required={true}
            />
            <TextBox
                PlaceHolder={"Last Name"}
                Type={"text"}
                labelText={"Last Name :"}
                iD={"lastName"}
                isNumber={true}
                onChange={setLastName}
                required={true}
                name={"lastName"}
            />
            <div className='d-flex gap-2  mt-4'>
                <button className='btn btn-info w-100 p-2 text-nowrap' onClick={() => setStep("step1")}>Back</button>
                <button className='btn btn-info  w-100 p-2' onClick={handleNext}>Next</button>
            </div>
        </>
    )
}

export default Step2