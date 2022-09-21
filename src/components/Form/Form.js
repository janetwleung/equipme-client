import { useParams } from "react-router-dom";
import CTA from "../CTA/CTA";
import "./Form.scss";

function Form() {
    let { formId } = useParams();
    return (
        <main className="intake">
            <div className="intake__container">
                <h2 className="intake__title">Tell us about yourself</h2>
                <form className="intake__form">
                    <div className="intake__input-container">
                        <label htmlFor="age" className="intake__label">Age:</label>
                        <input className="intake__input" type="text" id="age" name="age" />
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="height" className="intake__label">Height:</label>
                        <input className="intake__input" type="text" id="height" name="height" />
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="position" className="intake__label">Position:</label>
                        <input className="intake__input" type="text" id="position" name="position" />
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="level" className="intake__label">Level:</label>
                        <input className="intake__input" type="text" id="level" name="level" />
                    </div>
                    <div className="intake__button">
                        <CTA text="Submit" />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Form;