import React, { useState } from 'react'
import css from "./nav.module.css"
import logo from "../../Images/logo.png"
import { useRecoilState } from 'recoil'
import { currentUser  ,pages,screen} from '../../Global/Atom'
import job from "../../assets/job.svg"
const Navbar = () => {
    const [logedUser] = useRecoilState(currentUser)
    const [page , setPage] =useRecoilState(pages)
    const width = window.screen.width;
    const [active, setActive] = useState(width <= "768px" ? false : true);
    return (
        <>
            <div className={css.navbarMain}>
                <div className={css.left}>
                    <img src={logo} className='img-fluid' alt="" />
                </div>
                {active && <div className={css.right} >
                    <div className={` ${css.navLinkContainer}`} onClick={()=>setPage("Homepage")}>
                        <span className={page=='Homepage'?`activeLink ${css.linkLable}`: `${css.linkLable} hover-underline-animation`}>Home</span>
                        <i className={page == "Homepage"?'iconActive fa fa-home icon':"fa fa-home icon" }></i>
                    </div>
                    <div className={css.navLinkContainer} onClick={()=>setPage("Jobs")}>
                        <span className={page=='Jobs'?`activeLink ${css.linkLable}`: `${css.linkLable} hover-underline-animation`} >jobs</span>
                        <i className={page == "Jobs" ? 'iconActive fa fa-briefcase icon' : "fa fa-briefcase icon"}></i>
                    </div>
                    <div className={css.navLinkContainer} onClick={()=>setPage("Search")}>
                        <span className={page=='Search'?`activeLink ${css.linkLable}`:  `${css.linkLable} hover-underline-animation`}>search</span>
                        <i className={page=="Search"?'iconActive fa fa-search icon' : "fa fa-search icon"}></i>
                    </div>
                    <div className={css.navLinkContainer} onClick={()=>setPage("Saved")}>
                        <span className={page=='Saved'?`activeLink ${css.linkLable}`:  `${css.linkLable} hover-underline-animation`}>saved</span>
                        <i className={page == "Saved" ? 'iconActive fa fa-bookmark icon' : "fa fa-bookmark icon"}></i>
                    </div>
                    <div className={css.navLinkContainer} onClick={()=>setPage("Profile")}>
                        <span className={page=='Profile'?`activeLink ${css.linkLable}`:  `${css.linkLable} hover-underline-animation`}>profile</span>
                        <i className={page=="Profile" ? 'fa  fa-user icon iconActive' : "fa  fa-user icon"}></i>
                    </div>
                </div>}
                <div className={`${css.rightMobile} ellip`}>
                    <span className="res-font">Hello👋🏼, Vimal bhesaniya</span>
                    <div className={css.saperator}></div>
                    <div class={`${css.hamburger} hand`} onClick={() => setActive(!active)}>
                        <i className={active ? 'fa fa-close fs-5 slw' : 'fa fa-bars fs-5 slw'}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar