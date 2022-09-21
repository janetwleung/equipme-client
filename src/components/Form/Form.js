import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSpecificSport } from "../../utils/api-utils";
import CTA from "../CTA/CTA";
import "./Form.scss";

function Form() {
    let { sportId } = useParams();
    const [form, setForm] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchSpecificSport(sportId)
            .then(sportResponse => {
                setForm(sportResponse.data);
            })
            .catch(() => {
                setIsError(true);
                console.log("For developers: There was an error fetching the form fields")
            })
    }, [sportId]);

    if (isError) {
        return <span>There was an error fetching the data.</span>
    };

    if (!form) {
        return <span>Loading...</span>
    };

    return (
        <main className="intake">
            <div className="intake__container">
                <h2 className="intake__title">Tell us about yourself</h2>
                <form className="intake__form">
                    <div className="intake__input-container">
                        <label htmlFor="age" className="intake__label">{form.formInput1}:</label>
                        <input className="intake__input" type="text" id="age" name="age" />
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="height" className="intake__label">{form.formInput2}:</label>
                        <input className="intake__input" type="text" id="height" name="height" />
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="position" className="intake__label">{form.formInput3}:</label>
                        <input className="intake__input" type="text" id="position" name="position" />
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="level" className="intake__label">{form.formInput4}:</label>
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