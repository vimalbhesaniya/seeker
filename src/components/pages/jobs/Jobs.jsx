import React, { useCallback, useEffect, useState } from "react";
import useAPI from "../../../Hooks/useAPI";
const Jobs = () => {
    const [hide , setHide] = useState(false);
    const [data ,setData] = useState([])
    const api = useAPI()
    const handleHide = useCallback(
        (key, e) => {
            setHide((prev) => {
                setFilterData(Object.entries(e).filter(([key, _]) =>
                    jobSchemaKeys.includes(key)
                ));
                if (hide.includes(key)) {
                    return hide.filter((e) => e !== key);
                } else {
                    return [...prev, key];
                }
            });
        },
        [hide]
    );

    const fetch = useCallback(async () => {
        const jobs = await api.getREQUEST(`jobs`);
        console.log(jobs);
        setData(jobs);
    } , []);

    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <table className="">
                            <thead className="">
                                <tr className="">
                                    <th colSpan={2} className="p-3">
                                        <div className="d-flex gap-2 justify-content-between ">
                                            <span>Software devloper</span>
                                            <span className="d-flex flex-column  ">
                                                <small>By Abc Company</small>
                                                <small style={{fontSize:"10px"}}>At 12th Jan 2023</small>
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="">
                                        <span className="badge text-info bg-info-subtle ">
                                            Position
                                        </span>{" "}
                                    </td>
                                    <td>Junier Devloper</td>
                                </tr>
                                <tr>
                                    <td className="">
                                        <span className="badge text-info bg-info-subtle ">
                                            Discription
                                        </span>{" "}
                                    </td>
                                    <td className="">
                                        <p className={!hide&&"doEllips"}>
                                            A software developer is a skilled
                                            professional responsible for
                                            designing, developing, and
                                            maintaining software applications or
                                            systems. They play a crucial role in
                                            the software development lifecycle,
                                            from analyzing user requirements to
                                            deploying the final product.
                                            Software developers work across
                                            various industries, including
                                            technology, finance, healthcare, and
                                            entertainment, and may specialize in
                                            different programming languages,
                                            platforms, or domains.
                                        </p>
                                    </td>
                                </tr>
                                {hide&&<tr>
                                    <td>More details</td>
                                </tr>}
                                <tr>
                                    <td className="">
                                        <button className="btn btn-info"
                                        onClick={()=>setHide(!hide)}
                                        >
                                            View&Apply
                                        </button>{" "}
                                    </td>
                                    <td className="">
                                        <button className="btn btn-info">
                                            Save
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jobs;
