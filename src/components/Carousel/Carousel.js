import "./Carousel.scss";
import SportCard from "../SportCard/SportCard";
import sportsData from "../../assets/data/sports.json";

function Carousel() {
    return (
        <div className="carousel" id="carousel">
            {sportsData.map(sportData => (
                <SportCard
                    key={sportData.id}
                    sport={sportData.sport}
                    image={sportData.image}
                />
            ))}
        </div>
    
    );
}

export default Carousel;