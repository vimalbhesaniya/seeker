import React, { useEffect, useState } from "react";
import TextBox from "../../../Form/TextBox";
import { useRecoilState } from "recoil";
import { formData } from "../../../Global/Atom";

const Step4 = ({ setStep, count }) => {
    const [personalAddress, setPersonalAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [data, setData] = useRecoilState(formData);

    const handleNext = () => {
        setData({
            ...data,
            location: [
                {
                    personalAddress: personalAddress ||"No data",
                    pinCode: pinCode ||"No data",
                    state: state ||"No data",
                    city: city ||"No data",
                },
            ],
        });
        setStep("step4");
    };

    useEffect(() => {
        count(25);
    }, []);

    return (
        <>
            <span className="fw-bolder text-info">
                Give your Address Details.
            </span>
            <p className="p fw-bolder ">
                All fields are mandatory to proceed to the next step.
            </p>

            <TextBox
                PlaceHolder={"Personal Address"}
                Type={"text"}
                labelText={"Personal Address:"}
                iD={"personalAddress"}
                onChange={setPersonalAddress}
                name={"personalAddress"}
                required={true}
            />
            <TextBox
                PlaceHolder={"Pin Code"}
                Type={"text"}
                labelText={"Pin Code:"}
                isText={true}
                iD={"pinCode"}
                onChange={setPinCode}
                required={true}
                maxLength={6}
                name={"pinCode"}
            />
            <TextBox
                PlaceHolder={"State"}
                Type={"text"}
                labelText={"State:"}
                iD={"state"}
                onChange={setState}
                required={true}
                name={"state"}
            />
            <TextBox
                PlaceHolder={"City"}
                Type={"text"}
                labelText={"City:"}
                iD={"city"}
                onChange={setCity}
                required={true}
                name={"city"}
            />
            <div className="d-flex gap-2  mt-4">
                <button
                    className="btn btn-info w-100 p-2 text-nowrap"
                    onClick={() => setStep("step2")}
                >
                    Back
                </button>
                <button
                    className="btn btn-info  w-100 p-2"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Step4;
