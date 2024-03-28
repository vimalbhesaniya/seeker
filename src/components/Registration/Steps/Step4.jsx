import React, { useEffect, useState } from 'react';
import TextBox from '../../../Form/TextBox';
import { useRecoilState } from 'recoil';
import { formData } from '../../../Global/Atom';

const Step4 = ({ setStep, count }) => {
    const [university, setUniversity] = useState('');
    const [school, setSchool] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [degreeLevel, setDegreeLevel] = useState([]);
    const [startDateSchool, setStartDateSchool] = useState('');
    const [endDateSchool, setEndDateSchool] = useState('');
    const [gpa, setGpa] = useState('');
    const [certifications, setCertifications] = useState([]);
    const [data, setData] = useRecoilState(formData);

    const handleNext = () => {
        setData({
            ...data, education: [{
                "university": university || "No data",
                "school": school || "No data",
                "institutionName": institutionName || "No data",
                "degreeLevel": degreeLevel || "No data",
                "startDateSchool": startDateSchool,
                "endDateSchool": endDateSchool,
                "gpa": gpa || "No data" ,
                "certifications": certifications || "No data"
            }]
        });
        setStep("step5");
    };

    console.log(data);
    useEffect(() => {
        count(55);
    }, []);

    return (
        <>
            <span className='fw-bolder text-info'>Give your Education Details.</span>
            <p className='p fw-bolder '>Some fields which marked as * are mandatory to proceed to the next step.</p>

            <TextBox
                PlaceHolder={"Institution Name"}
                Type={"text"}
                labelText={"Institution Name :"}
                onChange={setInstitutionName}
                required={true}
            />
            <TextBox
                PlaceHolder={"University"}
                Type={"text"}
                labelText={"University :"}
                onChange={setUniversity}
                required={true}
            />
            <TextBox
                PlaceHolder={"School"}
                Type={"text"}
                labelText={"School :"}
                onChange={setSchool}
                required={true}
            />
            <TextBox
                PlaceHolder={"Degree Level"}
                Type={"text"}
                labelText={"Degree Level :"}
                onChange={setDegreeLevel}
                required={true}
            />
            <TextBox
                PlaceHolder={"Start Date (YYYY-MM-DD)"}
                Type={"text"}
                labelText={"Start Date (YYYY-MM-DD) :"}
                onChange={setStartDateSchool}
            />
            <TextBox
                PlaceHolder={"End Date (YYYY-MM-DD)"}
                Type={"text"}
                labelText={"End Date (YYYY-MM-DD) :"}
                onChange={setEndDateSchool}
            />
            <TextBox
                PlaceHolder={"GPA"}
                Type={"text"}
                labelText={"GPA :"}
                onChange={setGpa}
            />
            <TextBox
                PlaceHolder={"Certifications"}
                Type={"text"}
                labelText={"Certifications :"}
                onChange={setCertifications}
            />
            <div className='d-flex gap-2 mt-4'>
                <button className='btn btn-info w-100 p-2 text-nowrap' onClick={() => setStep("step3")}>Back</button>
                <button className='btn btn-info w-100 p-2' onClick={handleNext}>Next</button>
            </div>
        </>
    );
};

export default Step4;
