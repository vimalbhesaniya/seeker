import React from 'react'
import Lottie from "lottie-react"
import json from "../../assets/noconnection.json"
const NetworkError = () => {
    const onClick = ()=>{
        window.location.reload()
    }
    return (
        <>
            <div className='text-center d-flex flex-column  vh-100 justify-content-center  align-items-center'>
                <div className=''>
                    <Lottie
                        animationData={json}
                    />
                    <button className='btn btn-warning' onClick={onClick}>Refresh</button>
                </div>
            </div>
        </>
    )
}

export default NetworkError