import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSpecificSport } from "../../utils/api-utils";
import CTA from "../CTA/CTA";
import "./Form.scss";

function Form() {
    let { sportId } = useParams();
    const [form, setForm] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorMessages, setErrorMessages] = useState(false)
    const [errorThing, setErrorThing] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const navigate = useNavigate();

    const errorArray = []

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

    const handleSubmit = (event) => {

        event.preventDefault();
        setErrorMessages(false);

        const age = event.target.age.value;
        const position = event.target.position.value;
        const height = event.target.height.value;
        const level = event.target.level.value;

        const userInformation = {
            age: age,
            position: position,
            height: height,
            level: level
        }

        const errorMessagesArray = ["", "", "", ""];

        Object.values(userInformation).forEach((value, index, key) => {
            errorMessagesArray[index] = value ? "" : "This field is required";
        })

        const errorPresent = errorMessagesArray.find(errorMessage => errorMessage === "This field is required"); 

        if (isNaN(age) || age > 100 || age === "" ) {
            errorMessagesArray[0] = "Please enter a valid age"
        }

        setErrorMessages(errorMessagesArray);
        
        if (!errorPresent) {
            navigate("/products/gloves",  {state: {userInformation}});
        }
    }

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
                <form className="intake__form" onSubmit={handleSubmit}>
                    <div className="intake__input-container">
                        <label htmlFor="age" className="intake__label">{form.formInput1}:</label>
                        <input className="intake__input" type="text" id="age" name="age" />
                        {errorMessages[0] && <span className="intake__error-message">*Age needs to be a valid number</span>}
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="position" className="intake__label">{form.formInput2}:</label>
                        <select id="position" className="intake__select">
                            <option value="">Select</option>
                            <option value="infield">Infield</option>
                            <option value="first base">First Base</option>
                            <option value="outfield">Outfield</option>
                            <option value="pitcher">Pitcher</option>
                            <option value="catcher">Catcher</option>
                        </select>
                        {errorMessages[1] && <span className="intake__error-message">Please select a position</span>}
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="height" className="intake__label">{form.formInput3}:</label>
                        <select id="height" className="intake__select">
                            <option value="">Select</option>
                            <option value="1">4'1" - 4'5"</option>
                            <option value="2">4'6" - 4'10" </option>
                            <option value="3">4'11" - 5'2"</option>
                            <option value="4">5'3" - 5'7"</option>
                            <option value="5">5'8"+</option>
                        </select>
                        {errorMessages[2] && <span className="intake__error-message">Please select a height</span>}
                    </div>
                    <div className="intake__input-container">
                        <label htmlFor="level" className="intake__label">{form.formInput4}:</label>
                        <select id="level" className="intake__select">
                            <option value="">Select</option>
                            <option value="beginner">Beginner</option>
                            <option value="houseLeague">House League</option>
                            <option value="select">Select</option>
                            <option value="rep">Rep</option>
                            <option value="pro">Pro</option>
                        </select>
                        {errorMessages[3] && <span className="intake__error-message">Please select a level</span>}
                    </div>
                    <div className="intake__button">
                        <CTA text="Submit" isButton={true}/>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Form;