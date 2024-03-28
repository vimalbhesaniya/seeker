import React, { useState } from 'react'
import Stepper from './Stepper'
import TextBox from '../../Form/TextBox'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { screen } from '../../Global/Atom'
import Step4 from "./Steps/Step4"
import Step5 from "./Steps/Step5"
import Step6 from "./Steps/Step6"
import Step3 from './Steps/Step3'
const Signup = () => {

    const [step, setStep] = useState("step1");
    const [count, setCount] = useState();
    const [,setCurrentScreen] = useRecoilState(screen);

    const RenderStep = () => {
        switch (step) {
            case "step1":
                return <Step1 setStep={setStep} count={setCount} />
            case "step2":
                return <Step2 setStep={setStep} count={setCount} />
            case "step3":
                return <Step3 setStep={setStep} count={setCount} />
            case "step4":
                return <Step4 setStep={setStep} count={setCount} />
            case "step5":
                return <Step5 setStep={setStep} count={setCount} />
            case "step6":
                return <Step6 setStep={setStep} count={setCount} />
        }
    }
    return (
        <div className="do-flex --w-100 --h-100">
            <div className="--form">
                <span className='fs-1 h1'>Sign up</span>
                <Stepper
                    count={count}
                />
                <div className='w-100 --formBody'>
                {RenderStep()}
                </div>
                <div className='mt-2'>
                    <span className='hand' onClick={()=>setCurrentScreen("login")}>Already have an account ? <span className='badgeCustome'>Sign in</span></span>
                </div>
            </div>
        </div>


    )
}

export default Signup