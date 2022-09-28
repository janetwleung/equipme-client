import "./ProsPage.scss";
import { useEffect, useState } from "react";
import { fetchSports } from "../../utils/api-utils";
import SportCard from "../../components/SportCard/SportCard";
import Loading from "../../components/Loading/Loading";

function ProsPage() {
    const [sports, setSports] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchSports()
          .then((sportsResponse) => {
            setSports(sportsResponse.data);
          })
          .catch(() => {
            setIsError(true);
            console.log("For developers: There was an error fetching the sports")
          })
      }, []);
    
      if (isError) {
        return <span>There was an error fetching the data.</span>
      }
    
      if (!sports) {
        return <Loading />
      };
    return (
        <main className="pros-page">
            <h1 className="pros-page__title">Team Canada</h1>
            <p className="pros-page__subtitle">Curious to know what the pros use? Click below to find out what equipment they use:</p>
            <div className="pros-page__content">
                <ul className="pros-page__sports-list">
                    {sports.map(sport => (
                        <li key={sport.id} className="pros-page__sport-card">
                            <SportCard
                            id={sport.id}
                            sport={sport.sport}
                            image={sport.image}
                            text="Roster"
                            link={`/what-the-pros-wear/${sport.sport}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default ProsPage;