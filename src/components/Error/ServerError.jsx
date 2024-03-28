import React from 'react'
import Lottie from "lottie-react"
import json from "../../assets/noconnection.json"
import svg from './../../assets/undraw_server_down_s-4-lk.svg'
const ServerError = () => {
    const onClick = () => {
        window.location.reload()
    }
    return (
        <>
            <div className='text-center d-flex flex-column  vh-100 justify-content-center  align-items-center'>
                <div className='d-flex flex-column justify-content-center  align-align-items-center '>
                    <img src={svg}  className="img-fluid" alt="" />
                    <span className='fs-2'>Internal Server Error ☹️</span>
                </div>
            </div>
        </>
    )
}

export default ServerError