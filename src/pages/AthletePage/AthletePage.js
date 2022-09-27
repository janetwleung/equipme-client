import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProAthlete from "../../components/ProAthlete/ProAthlete";
import { fetchSpecificAthlete, fetchSpecificBat, fetchSpecificGlove, fetchSpecificCleat } from "../../utils/api-utils";
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

    // useEffect(() => {
    //     fetchSpecificGlove(!athlete.gloveId? "307a1f60-c2a2-4ed5-bcf0-0666fc7152ad" : athlete.gloveId)
    //         .then(gloveResponse => {
    //             console.log(gloveResponse.data);
    //         })
    //         .catch(error => {
    //             setIsError(true);
    //             console.log("For devs: There has been an error fetching the data")
    //         })
    // },[athleteId])

    // useEffect(() => {
    //     fetchSpecificBat(!athlete.batId ? "db7bfe71-2375-4223-9007-dc390243dfd4" : athlete.batId)
    //         .then(batResponse => {
    //             console.log(batResponse.data)
    //         })
    //         .catch(error => {
    //             setIsError(true);
    //             console.log("For devs: There has been an error fetching the data")
    //         })
    // }, [athleteId])

    // useEffect(() => {
    //     fetchSpecificCleat(!athlete.cleatId ? "e4a0605b-a49d-4432-865a-d09acf3805b6" : athlete.cleatId)
    //         .then(cleatResponse => {
    //             console.log(cleatResponse.data)
    //         })
    //         .catch(error => {
    //             setIsError(true);
    //             console.log("For devs: There has been an error fetching the data")
    //         })
    // }, [athleteId])

    if (isError) {
        return <span>There has been an error fetching the data</span>
    }

    if (!athlete) {
        return <span>Loading...</span>
    }

    return (
        <main className="athlete">
            <div className="athlete__content">
                <h2 className="athlete__name">{athlete.name}</h2>
                <p className="athlete__description">{athlete.description}</p>
                <ProAthlete 
                    name={athlete.name}
                    defenseImage={athlete.image1}
                    offenseImage={athlete.image2}
                    gloveId={athlete.gloveId}
                    baIdt={athlete.batId}
                    cleatId={athlete.cleatId}
                />
            </div>
        </main>
    );
}

export default AthletePage;