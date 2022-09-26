import "./Carousel.scss";
import SportCard from "../SportCard/SportCard";

function Carousel({ sports }) {
    return (
        <div className="carousel" id="carousel">
            <div className="carousel__space">

            </div>
            <h3 className="carousel__title">Choose a sport</h3>
            <ul className="carousel__list">
            {sports.map(sport => (
                <li key={sport.id}>
                    <SportCard
                    id={sport.id}
                    sport={sport.sport}
                    image={sport.image}
                    hoverImage={sport.hoverImage}
                />
                </li>
            ))}
            </ul>
        </div>
    
    );
}

export default Carousel;