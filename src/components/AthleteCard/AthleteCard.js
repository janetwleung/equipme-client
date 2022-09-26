import { Link } from "react-router-dom";
import "./AthleteCard.scss";

function AthleteCard({ id, name, image }) {

    console.log(name);
    return (
        <Link to={`/pros/Softball/${id}`}>
            <article className="athlete-card">
                <div className="athlete-card__image-container">
                    <img className="athlete-card__image" src={image} alt={name} />
                </div>
                <span className="athlete-card__name">{name}</span>

            </article>
        </Link>
    );
}

export default AthleteCard;