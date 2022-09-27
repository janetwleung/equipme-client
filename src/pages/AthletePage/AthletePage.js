import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSpecificAthlete } from "../../utils/api-utils";
import "./AthletePage.scss";

function AthletePage() {
    let { athleteId } = useParams();
    const [athlete, setAthlete] = useState();
    const [isError, setIsError] = useState(false);

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

    if (!athlete) {
        return <span>Loading...</span>
    }
    return (
        <main className="athlete">
            <div className="athlete__content">
                <h2 className="athlete__name">{athlete.name}</h2>
                <p className="athlete__description">{athlete.description}</p>
                <div className="athlete__image-container">
                    <img className="athlete__image" src={athlete.image1} alt={athlete.name} />
                </div>
            </div>
        </main>
    );
}

export default AthletePage;