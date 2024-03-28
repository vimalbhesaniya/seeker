import React, { useEffect, useState } from 'react';
import TextBox from '../../../Form/TextBox';
import { useRecoilState } from 'recoil';
import { formData } from '../../../Global/Atom';
import useAPI from '../../../Hooks/useAPI';

const Step6 = ({ setStep, count }) => {
    const [skills, setSkills] = useState([]);
    const [profession, setProfession] = useState([]);
    const [description, setDescription] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [data, setData] = useRecoilState(formData);
    const api = useAPI();

    const handleNext = async () => {
        setData({
            ...data,
            "skills": skills ||"No data",
            "profession": profession ||"No data",
            "description": description ||"No data",
            "languages": languages||"No data"
        });
        const res = api.postREQUEST("addUser" ,JSON.stringify(data));
        console.log(res);
    };

    useEffect(() => {
        count(100);
    }, []);

    return (
        <>
            <span className='fw-bolder text-info'>Give information about your self</span>
            <p className='p fw-bolder '>All fields are mandatory to proceed to the next step.</p>
            <TextBox
                PlaceHolder={"Skills"}
                Type={"text"}
                labelText={"Skills :"}
                onChange={(e) => setSkills({ ...skills, [e.target.value]: e.target.value })}
                required={true}
            />
            <TextBox
                PlaceHolder={"Profession"}
                Type={"text"}
                labelText={"Profession :"}
                onChange={(e) => setProfession({ ...profession, [e.target.value]: e.target.value })}
                required={true}
            />
            <TextBox
                PlaceHolder={"Description"}
                Type={"text"}
                labelText={"Description :"}
                onChange={(e) => setDescription({ ...description, [e.target.value]: e.target.value })}
                required={true}
            />
            <TextBox
                PlaceHolder={"Languages"}
                Type={"text"}
                labelText={"Languages :"}
                onChange={(e) => setLanguages({ ...languages, [e.target.value]: e.target.value })}
                required={true}
            />
            <div className='d-flex gap-2 mt-4'>
                <button className='btn btn-info w-100 p-2 text-nowrap' onClick={() => setStep("step5")}>Back</button>
                <button className='btn btn-info w-100 p-2' onClick={handleNext}>Next</button>
            </div>
        </>
    );
};

export default Step6;
