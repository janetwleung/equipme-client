import "./Main.scss";
import CTA from "../CTA/CTA";
import SportCard from "../SportCard/SportCard";
import softball from "../../assets/images/softball.png";
import hockey from "../../assets/images/hockey.png";
import lacrosse from "../../assets/images/lacrosse.png";

function Main() {
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
                    <div className="main__hero-button">
                        <CTA text="Get Started"/>
                    </div>
                </div>
            </section>
            <section className="main__sports-carousel">
                <SportCard 
                    sport="Softball" 
                    image={softball}
                />
                <SportCard 
                    sport="Hockey" 
                    image={hockey}
                />
                <SportCard 
                    sport="Lacrosse" 
                    image={lacrosse}
                />
            </section>
        </main>
    );
}

export default Main;