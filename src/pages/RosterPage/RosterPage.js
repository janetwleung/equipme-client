import { useEffect, useState } from "react";
import "./RosterPage.scss";
import { fetchAthletes } from "../../utils/api-utils";
import AthleteCard from "../../components/AthleteCard/AthleteCard";

function RosterPage() {
    const [athletes, setAthletes] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchAthletes()
            .then(athletesResponse => {
                setAthletes(athletesResponse.data);
            })
            .catch(error => {
                setIsError(true);
                console.log("For developers: There was an error fetching the athletes")
            })
    }, []);

    if (isError) {
        return <span>There was an error fetching the data.</span>
      }
    
      if (!athletes) {
        return <span>Loading...</span>
      };

      console.log(athletes)

    return (
        <main className="roster-page">
            <h2 className="roster-page__title">Pro Softball Players</h2>
            <h6 className="roster-page__subtitle">Click an athlete profile to see what equipment they like to use</h6>
            <div>
                <ul className="roster-page__athletes-list">
                    {athletes.map(athlete => (
                        <li key={athlete.id} className="roster-page__athlete-list-item">
                            <AthleteCard 
                                athletes={athlete}
                                id={athlete.id}
                                name={athlete.name}
                                image={athlete.image}
                                position={athlete.position}
                                number={athlete.number}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default RosterPage;