import "./Main.scss";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import { fetchSports } from "../../utils/api-utils";

function Main() {
    const [sports, setSports] = useState([]);
    const [isError, setIsError] = useState(false);

    // Sports list for carousel
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
    return <span>Loading...</span>
  };

    return (
        <main className="main">
            <section className="main__hero">
                <div className="main__hero-background">
                    <div className="main__hero-background-top">Sports</div>
                    <div className="main__hero-background-bottom">Sports</div>
                </div>
                <div className="main__title-container">
                    <h2 className="main__title">EquipMe.</h2>
                    <span className="main__subtitle">your first stop to finding new sports equipment</span>
                    <div className="main__hero-button-container">
                        <a className="main__hero-button" href="#carousel">Get Started</a>
                    </div>
                </div>
            </section>
            <section className="main__sports-carousel">
                <Carousel sports={sports}/>
            </section>
        </main>
    );
}

export default Main;