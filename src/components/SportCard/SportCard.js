import CTA from "../CTA/CTA";
import "./SportCard.scss";

function SportCard({ sport, image, hoverImage, link, text }) {

    return (
        <article 
            className="card" style={{backgroundImage: `url(${image})`}}>
            <h3 className="card__sport">{sport}</h3>
            <span className="card__description"></span>
            <div className="card__button">
                <CTA text={text} link={link} />
            </div>
        </article>
    );
}

export default SportCard;