import "./Main.scss";
import CTA from "../CTA/CTA";
import Carousel from "../Carousel/Carousel";

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
                    <div className="main__hero-button-container">
                        <a className="main__hero-button" href="#carousel">Get Started</a>
                    </div>
                </div>
            </section>
            <section className="main__sports-carousel">
                <Carousel />
            </section>
        </main>
    );
}

export default Main;