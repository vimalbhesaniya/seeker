import React from 'react'
import css from "./Home.module.css"
import Carousel from './Courousel'
import HeroSection from './HeroSection'
import HeroSection2 from './HeroSection2'
import Footer from '../../Shared/Footer'
import Jobs from '../jobs/Jobs'

const Homepage = () => {
    const imgs = [
        "https://img.freepik.com/free-photo/hiring-concept-with-laptop_23-2149519877.jpg?t=st=1711434041~exp=1711437641~hmac=dc80fd32589bd3808b2f73f578e738fc00234895df75e4a3a1ef1039ef4fb42f&w=1060",
        "https://img.freepik.com/free-photo/occupations-career-employment-recruitment-position-concept_53876-64962.jpg?t=st=1711434233~exp=1711437833~hmac=394fb8901fe7fab1ab6eb837fd292435b7f37139fd4acb857eaf7dc383851581&w=1060",
        "https://img.freepik.com/free-photo/coins-job-word_23-2148568014.jpg?t=st=1711434464~exp=1711438064~hmac=46b8cf5d4616427fb421442f3532bf0f565e9da879841dd47c2f5c8ced8f87a1&w=1060",
    ]
    return (
        <>
            <div className={css.homeMain}>
                <Carousel  slides={imgs}/>
                <HeroSection />
                <HeroSection2 />
                <Footer />
            </div>
        </>
    )
}

export default Homepage