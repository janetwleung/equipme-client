import { Link } from "react-router-dom";
import "./AthleteCard.scss";

function AthleteCard({ id, name, image, position, number }) {

    console.log(name);
    return (
        <Link to={`/what-the-pros-wear/Softball/${id}`} className="athlete-card__link">
            <article className="athlete-card">
                <div className="athlete-card__image-container">
                    <img className="athlete-card__image" src={image} alt={name} />
                </div>
                <div className="athlete-card__details">
                    <div className="athlete-card__name-number">
                        <span className="athlete-card__number">#{number}</span>
                        <span className="athlete-card__name">{name}</span>
                    </div>
                    <span className="athlete-card__position">{position}</span>
                </div>

            </article>
        </Link>
    );
}

export default AthleteCard;