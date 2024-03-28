import React, { useCallback } from 'react'
import css from "./css.module.css"
import { useRecoilState } from 'recoil'
import Navbar from '../Shared/Navbar'
import { pages, currentUser } from '../../Global/Atom'
import Homepage from '../pages/Home/Homepage'
import Jobs from '../pages/jobs/Jobs'
import Saved from '../pages/saved/Saved'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import BreadCrumb from '../Shared/BreadCrumb'
const Root = () => {
    const [page, setPage] = useRecoilState(pages);
    const [logedUser, setLogedUser] = useRecoilState(currentUser)
    const renderPage = useCallback(() => {
        switch (page) {
            case "Homepage":
                return <Homepage />
            case "Jobs":
                return <Jobs />
            case "Search":
                return <Search />
            case "Saved":
                return <Saved />
            case "Profile":
                return <Profile />
                break;

            default:
                break;
        }
    }, [page])
    return (
        <>
            <div className='d-flex align-items-center  flex-column justify-content-center '>
                <div className={css.main}>
                    <Navbar />
                    <div className={css.Body} style={{ marginTop: "170px" }}>
                        <div style={{width:"95%"}}>
                            <BreadCrumb />
                            {renderPage()}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Root