import "./Carousel.scss";
import SportCard from "../SportCard/SportCard";

function Carousel({ sports }) {
    console.log(sports[0].sport)
    return (
        <div className="carousel" id="carousel">
            <div className="carousel__space">

            </div>
            <h3 className="carousel__title">Choose a sport</h3>
            <ul className="carousel__list">
            {sports.map(sport => (
                <li key={sport.id}>
                    <SportCard
                    sport={sport.sport}
                    image={sport.image}
                    hoverImage={sport.hoverImage}
                    text="Find Equipment"
                    link={`/form/${sport.id}`}
                />
                </li>
            ))}
              {/* <li>
                    <SportCard
                    sport={sports[0].sport}
                    image={sports[0].image}
                    hoverImage={sports[0].hoverImage}
                    text="Find Equipment"
                    link={`/form/${sports[0].id}`}
                />
                </li>
                <li>
                    <SportCard
                    sport={sports[1].sport}
                    image={sports[1].image}
                    hoverImage={sports[1].hoverImage}
                    text="Find Equipment"
                    link="#"
                />
                 </li>
                <li>
                    <SportCard
                    sport={sports[2].sport}
                    image={sports[2].image}
                    hoverImage={sports[2].hoverImage}
                    text="Find Equipment"
                    link="#"
                />
                 </li> */}
            </ul>
        </div>
    
    );
}

export default Carousel;