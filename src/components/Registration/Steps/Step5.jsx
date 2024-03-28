import React, { useEffect, useState } from 'react';
import TextBox from '../../../Form/TextBox';
import { useRecoilState } from 'recoil';
import { formData } from '../../../Global/Atom';

const Step5 = ({ setStep, count }) => {
    const [isFresher, setIsFresher] = useState(true);
    const [userType, setUserType] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [startDateWork, setStartDateWork] = useState('');
    const [endDateWork, setEndDateWork] = useState('');
    const [responsibilities, setResponsibilities] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [data, setData] = useRecoilState(formData);

    const handleNext = () => {
        setData({
            ...data, "workExperience": {
                "isFresher": isFresher ||"No data",
                "userType": userType ||"No data",
                "jobTitle": jobTitle ||"No data",
                "companyName": companyName ||"No data",
                "startDateWork": startDateWork ||"No data",
                "endDateWork": endDateWork ||"No data",
                "responsibilities": responsibilities ||"No data",
                "achievements": achievements ||"No data"
            }
        });
        setStep("step6");
    };

    console.log(data);
    useEffect(() => {
        count(70);
    }, []);

    return (
        <>
            <span className='fw-bolder text-info'>Give your recent Experience Details.</span>
            <p className='p fw-bolder '>All fields are not mandatory to proceed to the next step.</p>
            <TextBox
                PlaceHolder={"User Type"}
                Type={"text"}
                labelText={"User Type :"}
                iD={"userType"}
                onChange={setUserType}
                name={"userType"}
            />
            <TextBox
                PlaceHolder={"Job Title"}
                Type={"text"}
                labelText={"Job Title :"}
                iD={"jobTitle"}
                onChange={setJobTitle}
                name={"jobTitle"}
            />
            <TextBox
                PlaceHolder={"Company Name"}
                Type={"text"}
                labelText={"Company Name :"}
                iD={"companyName"}
                onChange={setCompanyName}
                name={"companyName"}
            />
            <TextBox
                PlaceHolder={"Start Date Work"}
                Type={"date"}
                labelText={"Start Date Work :"}
                iD={"startDateWork"}
                onChange={setStartDateWork}
                name={"startDateWork"}
            />
            <TextBox
                PlaceHolder={"End Date Work"}
                Type={"date"}
                labelText={"End Date Work :"}
                iD={"endDateWork"}
                onChange={setEndDateWork}
                name={"endDateWork"}
            />
            <TextBox
                PlaceHolder={"Responsibilities"}
                Type={"text"}
                labelText={"Responsibilities :"}
                iD={"responsibilities"}
                onChange={setResponsibilities}
                name={"responsibilities"}
            />
            <TextBox
                PlaceHolder={"Achievements"}
                Type={"text"}
                labelText={"Achievements :"}
                iD={"achievements"}
                onChange={setAchievements}
                name={"achievements"}
            />
            <div className='d-flex gap-2  mt-4'>
                <button className='btn btn-info w-100 p-2 text-nowrap' onClick={() => setStep("step4")}>Back</button>
                <button className='btn btn-info w-100 p-2' onClick={handleNext}>Next</button>
            </div>
        </>
    );
};

export default Step5;
