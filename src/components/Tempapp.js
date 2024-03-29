import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3ee18c2c277fb829191477142be942ef`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson.main)
        }
        fetchApi()
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        value={search}
                        className="inputFeild"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (
                    <p className="noData">No Data Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view "></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°cel 
                            </h1>
                            <h3 className="tempmin_max">Min:{city.temp_min}°cel || Max: {city.temp_max}°cel</h3>
                        </div>
                    </div>
                )}


            </div>



        </>
    )
}

export default Tempapp;