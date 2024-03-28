import React from 'react'
import Lottie from "lottie-react"
import json from "../../assets/noconnection.json"
const Expired = () => {
    const onClick = ()=>{
        window.location.reload()
    }
    return (
        <>
            <div className='text-center d-flex flex-column  vh-100 justify-content-center  align-items-center'>
                <div className='d-flex flex-column  justify-content-center  align-items-center '>
                    <span>Your Session has been Expired</span>
                    <button className='btn btn-warning' onClick={onClick}>Login Again</button>
                </div>
            </div>
        </>
    )
}

export default Expired