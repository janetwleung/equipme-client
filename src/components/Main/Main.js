import "./Main.scss";
import CTA from "../CTA/CTA";
import SportCard from "../SportCard/SportCard";
import softball from "../../assets/images/softball.png";

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
                        <CTA text="Available Sept 29th"/>
                    </div>
                </div>
            </section>
            <section className="main__sports-list">
                <SportCard 
                    sport="Softball" 
                    image={softball}
                />
            </section>
        </main>
    );
}

export default Main;