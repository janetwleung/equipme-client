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
            <h1 className="roster-page__title">Team Canada Softball</h1>
            <div>
                <ul className="roster-page__athletes-list">
                    {athletes.map(athlete => (
                        <li key={athlete.id} className="roster-page__athetle-list-item">
                            <AthleteCard 
                                athletes={athlete}
                                id={athlete.id}
                                name={athlete.name}
                                image={athlete.image}
                                image1={athlete.image1}
                                image2={athlete.image2}
                                glove={athlete.glove_id}
                                bat={athlete.bat_id}
                                cleats={athlete.cleat_id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default RosterPage;