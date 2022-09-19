import "./Form.scss";

function Form() {
    return (
        <main className="intake">
            <h2 className="intake__title">Tell us about yourself</h2>
            <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
        </main>
    );
}

export default Form;