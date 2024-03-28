import React from 'react'
import { useRecoilState } from 'recoil'
import { pages } from '../../Global/Atom'

const BreadCrumb = () => {
    const [page] = useRecoilState(pages)
  return (
    <>
        <div className='container-fluid'>
            <div className='row card '>
                <div className="col p-2 bcrum">
                    <span className='fs-4 fw-bold mx-2 '>/{page}</span>
                </div>
            </div>
        </div>
    </>
    )
}

export default BreadCrumb