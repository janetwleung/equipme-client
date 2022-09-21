import "./Carousel.scss";
import SportCard from "../SportCard/SportCard";
import sportsData from "../../assets/data/sports.json";

function Carousel() {
    return (
        <div className="carousel" id="carousel">
            <h3 className="carousel__title">Choose a sport</h3>
            <ul className="carousel__list">
            {sportsData.map(sportData => (
                <li key={sportData.id}>
                    <SportCard
                    key={sportData.id}
                    sport={sportData.sport}
                    image={sportData.image}
                />
                </li>
            ))}
            </ul>
        </div>
    
    );
}

export default Carousel;