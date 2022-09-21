import CTA from "../CTA/CTA";
import "./SportCard.scss";

function SportCard({ sport, image, hoverImage }) {
    return (
        <article 
            className="card">
            <h3 className="card__sport">{sport}</h3>
            <span className="card__description"></span>
            <div className="card__button">
                <CTA text="Find Equipment" link="/form" />
            </div>
        </article>
    );
}

export default SportCard;