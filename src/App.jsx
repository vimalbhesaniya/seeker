import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Online, currentUser, errorState, loading } from './Global/Atom'
import { screen } from './Global/Atom'
import Expired from './components/Error/Expired'
import "./App.css"
import Login from './components/Login/Login'
import Root from './components/Root/Root'
import NetworkError from './components/Error/NetworkError'
import { ToastContainer } from 'react-toastify'
import Signup from './components/Registration/Signup'
import useAPI from './Hooks/useAPI'
import ServerError from './components/Error/ServerError'
import ResetPassword from './components/Login/ResetPassword'
import Loader from './Global/Loader'

const App = () => {

    const [currentScreen, setCurrentScreen] = useRecoilState(screen);
    const [logedUser ,setLogedUser] =useRecoilState(currentUser)
    const [loader ,setloader] =useRecoilState(loading)
    const [isOnline , setIsOnline] = useRecoilState(Online)
    const [error , setError] = useRecoilState(errorState);
    const api = useAPI()

    const renderScreen = useCallback(() => {
        switch (currentScreen) {
            case "login":
                return <Login />
            case "root":
                return <Root />
            case "signup":
                return <Signup />
            case "invalidToken":
                return <Expired />
            case "reset":
                return <ResetPassword />
            default:
                break;
        }
    }, [currentScreen])
    return (
        <>
            {loader&&<Loader />}
            {error? 
            <ServerError />
            : !isOnline
            ?
            <NetworkError />
            :
            renderScreen()}
            
        </>
    )
}
export default App