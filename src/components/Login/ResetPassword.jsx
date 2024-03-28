import React, { useCallback, useState } from "react";
import "./ResetPassword.css"
import TextBox from "../../Form/TextBox";
import { useRecoilState } from "recoil";
import { loading, screen } from "../../Global/Atom";
import { toast } from "react-toastify";

const ResetPassword = ({ close }) => {
    const [email, setEmail] = useState("");
    const [loader, setLoader] = useRecoilState(loading);
    const [currentScreen, setCurrentScreen] = useRecoilState(screen);
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState(1); // 1: Email input, 2: OTP input, 3: New password input
    const [isClose, setIsClose] = useState(false);
    const [message, setMessage] = useState("");

    const handleClose = useCallback(() => {
        setIsClose(!isClose);
        close(isClose);
    }, [isClose]);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setMessage('');cd   
        if (email) {
            setLoader(true)
            const response = await fetch("http://localhost:5500/forgot", {
                body: JSON.stringify({ email }),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((e) => e.json());
            if (response.status) {
                setLoader(false)
                toast.success(response.result.message)
                setStep(2);
                setMessage("");
            }
            else {
                alert(response.message)
            }
        }
        else {
            toast.error("provide email");
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        if (otp.length === 6) {

            const response = await fetch("http://localhost:5500/checkOTP", {
                body: JSON.stringify({ otp, email }),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((e) => e.json());
            if (!response.success) {
                setMessage("OTP is Not valid");
            }
            else {
                setStep(3);
                toast.success("You can change the password");
            }
        }
        else {
            alert("invalid otp ")
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        // Implement password reset logic here (server-side logic in a real app).
        // For this example, let's assume the password is successfully reset.
        const response = await fetch("http://localhost:5500/changePwd", {
            body: JSON.stringify({ email, password }),
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((e) => e.json());
        if (response.success) {
            toast.success("Password reset successfully!");
            setCurrentScreen("login");
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-popup">
                <button className="close-button" onClick={() => handleClose()}>
                    x
                </button>
                <div className="popup-content">
                    {step === 1 && (
                        <form onSubmit={handleEmailSubmit}>
                            <label>Email:</label>
                            <TextBox
                                Type={"email"}
                                onChange={setEmail}
                            />
                            <button type="submit" className="btn btn-success ">
                                Submit
                            </button>
                        </form>
                    )}
                    {step === 2 && (
                        <form onSubmit={handleOtpSubmit}>
                            <label>OTP:</label>
                            <TextBox
                                Type={"text"}
                                required={true}
                                onChange={setOtp}
                            />
                            <button type="submit" className="btn bgbtn">
                                Submit
                            </button>
                        </form>
                    )}
                    {step === 3 && (
                        <form onSubmit={handlePasswordReset}>
                            <label>New Password:</label>
                            <TextBox
                                Type={"password"}
                                required={true}
                                enablePassword={true}
                                onChange={setPassword}
                            />
                            <button type="submit" className="btn bgbtn">
                                Reset Password
                            </button>
                        </form>
                    )}
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
