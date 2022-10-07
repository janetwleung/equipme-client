import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProAthlete from "../../components/ProAthlete/ProAthlete";
import { fetchSpecificAthlete} from "../../utils/api-utils";
import circleIcon from "../../assets/icons/double-circle.png";
import "./AthletePage.scss";
import backArrow from "../../assets/icons/arrow-back.png"
import Loading from "../../components/Loading/Loading";

function AthletePage() {
    let { athleteId } = useParams();
    const [athlete, setAthlete] = useState();
    const [isError, setIsError] = useState(false);
    const [defenseActive, setDefenseActive] = useState(true);
    const [offenseActive, setOffenseActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSpecificAthlete(athleteId)
            .then(athleteResponse => {
                setAthlete(athleteResponse.data);
            })
            .catch(error => {
                setIsError(true);
                console.log("For devs: There has been an error fetching the data")
            })
    }, [athleteId]);

    if (isError) {
        return <span>There has been an error fetching the data</span>
    }

    if (!athlete) {
        return <Loading />
    }

    const handleDefenseClick = () => {
        setOffenseActive(false);
        setDefenseActive(true);
    }

    const handleOffenseClick = () => {
        setDefenseActive(false);
        setOffenseActive(true);
    }

    const splitName = (athlete.name).split(" ");

    return (
        <main className="athlete">
            <div className="athlete__back-container" onClick={() => navigate(-1)}>
                <img src={backArrow} alt="Back arrow" className="athlete__arrow"/>
                <span className="athlete__back">Back</span>
            </div>
            <div className="athlete__content">
                <div className="athlete__details">
                    <h2 className="athlete__name">{athlete.name}</h2>
                    <span className="athlete__position">{athlete.position}</span>
                    <div className="athlete__description-container">
                        <p className="athlete__description">{athlete.description}</p>
                    </div>
                    <span className="athlete__number">{athlete.number}</span>
                    <span className="athlete__message">Click on the <img className="athlete__circle" src={circleIcon} alt="Circle icon" /> to see what equipment {splitName[0]} likes to use.</span>
                </div>
                <div className="athlete__image">
                        <ul className="athlete__nav-list">
                            <li className="athlete__nav-list-item" onClick={handleDefenseClick}>Defense</li>
                            <li className="athlete__nav-list-item" onClick={handleOffenseClick}>Offense</li>
                        </ul>
                    {defenseActive && 
                    <ProAthlete 
                        name={athlete.name}
                        image={athlete.image1}
                        gloveId={athlete.gloveId}
                        baIdt={athlete.batId}
                        cleatId={athlete.cleatId}
                        equipment1OffsetX={athlete.gloveOffsetX}
                        equipment1OffsetY={athlete.gloveOffsetY}
                        equipment2OffsetX={athlete.cleatOffsetX}
                        equipment2OffsetY={athlete.cleatOffsetY}
                    />}
                    {offenseActive && 
                    <ProAthlete 
                        name={athlete.name}
                        image={athlete.image2}
                        gloveId={athlete.gloveId}
                        baIdt={athlete.batId}
                        cleatId={athlete.cleatId}
                        gloveOffsetX={athlete.gloveOffsetX}
                        gloveOffsetY={athlete.gloveOffsetY}
                        cleatOffsetX={athlete.cleatOffsetX}
                        cleatOffsetY={athlete.cleatOffsetY}
                    />}
                </div>
                
            </div>
        </main>
    );
}

export default AthletePage;