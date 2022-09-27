import "./ProAthlete.scss";
import { useEffect, useState } from "react";
import { fetchSpecificBat, fetchSpecificGlove, fetchSpecificCleat } from "../../utils/api-utils";


function ProAthlete({ name, defenseImage, offenseImage, gloveId, batId, cleatId }) {

    useEffect(() => {
        fetchSpecificGlove(gloveId)
            .then(gloveResponse => {
                console.log(gloveResponse.data);
            })
            .catch(error => {
                // setIsError(true);
                console.log("For devs: There has been an error fetching the data")
            })
    },[])

    useEffect(() => {
        fetchSpecificBat(batId)
            .then(batResponse => {
                console.log(batResponse.data)
            })
            .catch(error => {
                // setIsError(true);
                console.log("For devs: There has been an error fetching the data")
            })
    }, [])

    useEffect(() => {
        fetchSpecificCleat(cleatId)
            .then(cleatResponse => {
                console.log(cleatResponse.data)
            })
            .catch(error => {
                // setIsError(true);
                console.log("For devs: There has been an error fetching the data")
            })
    }, [])

    return (
        <div className="athlete__image-container">
            <img className="athlete__image" src={defenseImage} alt={name} />
        </div>
    );
}

export default ProAthlete;