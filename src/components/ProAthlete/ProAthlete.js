import "./ProAthlete.scss";
import { useEffect, useState } from "react";
import { fetchSpecificBat, fetchSpecificGlove, fetchSpecificCleat } from "../../utils/api-utils";
import circleButton from "../../assets/icons/double-circle.png";

function ProAthlete({ name, defenseImage, offenseImage, gloveId, batId, cleatId, gloveOffsetX, gloveOffsetY, cleatOffsetX, cleatOffsetY }) {
    const [glove, setGlove] = useState();
    const [bat, setBat] = useState();
    const [cleat, setCleat] = useState();
    const [isError, setIsError] = useState();

    useEffect(() => {
        fetchSpecificGlove(gloveId)
            .then(gloveResponse => {
                setGlove(gloveResponse.data)
            })
            .catch(error => {
                setIsError(true);
                console.log("For devs: There has been an error fetching the data")
            })
    },[])

    useEffect(() => {
        fetchSpecificBat(batId)
            .then(batResponse => {
                setBat(batResponse.data)
            })
            .catch(error => {
                setIsError(true);
                console.log("For devs: There has been an error fetching the data")
            })
    }, [])

    useEffect(() => {
        fetchSpecificCleat(cleatId)
            .then(cleatResponse => {
                setCleat(cleatResponse.data)
            })
            .catch(error => {
                setIsError(true);
                console.log("For devs: There has been an error fetching the data")
            })
    }, [])

    const handleClick = (event) => {
        console.log("X:" + event.nativeEvent.offsetX)
        console.log("Y:" + event.nativeEvent.offsetY)
    }

    const handleGloveClick = (event) => {
        console.log(glove)
    }

    const handleCleatClick = (event) => {
        console.log(cleat)
    }


    if (isError) {
        return <span>There was an error fetching the data</span>
    }

    return (
        <div className="athlete-image">
            <div className="athlete-image__image-container">
                <img className="athlete-image__image" src={defenseImage} alt={name} onClick={handleClick}/>
                <img 
                    className="athlete-image__glove-button athlete-image__button" 
                    src={circleButton} 
                    alt="circle button" 
                    style={{ top: `${gloveOffsetY}px`, left: `${gloveOffsetX}px` }}
                    onClick={handleGloveClick}
                />
                <img 
                    className="athlete-image__cleat-button athlete-image__button" 
                    src={circleButton} 
                    alt="circle button" 
                    style={{ top: `${cleatOffsetY}px`, left: `${cleatOffsetX}px` }}
                    onClick={handleCleatClick}
                />
            </div>
        </div>
    );
}

export default ProAthlete;