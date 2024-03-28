import React, { useEffect, useState } from 'react'
import TextBox from '../../Form/TextBox'
import useAPI from '../../Hooks/useAPI';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { screen } from '../../Global/Atom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [currentScreen, setCurrentScreen] = useRecoilState(screen);
    const api = useAPI()
    const handleSubmit = async () => {
        if (email && password) {
            const res = await api.postREQUEST("login", JSON.stringify({ email, password }))
            console.log(res);
            if (res.error) {
                toast.error(res.error)
            }
            else {
                if (res.id) {
                    localStorage.setItem("id", res.id)
                    localStorage.setItem("token", res.token);
                    toast.success("login successfully")
                    setCurrentScreen("root")
                }
            }
        }
        else {
            toast.error("Fill the form")
        }
    }
    return (

        <div className="do-flex --w-100 --h-100">
            <div className="--form">
                <span className='fs-1 h1'>Login</span>
                <p className='p'>Unlock Your World with Us: Your Key to Seamless Access.</p>
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
                    PlaceHolder={"password"}
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
                <div className='d-flex gap-2  mt-4'>
                    <button className='btn btn-info w-100 p-2 text-nowrap ' onClick={() => setCurrentScreen("reset")}>Forget Password</button>
                    <button className='btn btn-info  w-100 p-2' onClick={handleSubmit}>Login</button>
                </div>
                <div className='mt-2'>
                    <span className='hand' onClick={() => setCurrentScreen("signup")}>Need to create account ? <span className='badgeCustome'>Sign Up</span></span>
                </div>
            </div>
        </div>
    )
}

export default Login