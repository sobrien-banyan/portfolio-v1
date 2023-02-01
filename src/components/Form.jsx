import React, { useContext } from "react";
import { MainContext } from "./Context";

const Form = () => {
    const store = useContext(MainContext);
    return (
        <div
            id="Contact-form"
            style={store.themeBoolean ? store.darkTheme : store.lightTheme}
        >
            <div className="w3-container w3-content w3-padding-64">
                <h2 className="w3-wide w3-center w3-margin-bottom">Contact</h2>
                <form className="w3-container w3-card-4 w3-padding-16 w3-white" action="/action_page.php" target="_blank">
                <input type="hidden" name="form-name" value="contact" />.
                    <div className="w3-section">
                        <label>Name</label>
                        <input className="w3-input" type="text" name="Name" required />
                    </div>
                    <div className="w3-section">
                        <label>Email</label>
                        <input className="w3-input" type="text" name="Email" required />
                    </div>
                    <div className="w3-section">
                        <label>Message</label>
                        <input className="w3-input" type="text" name="Message" required />
                    </div>
                    <button type="submit" className="w3-button w3-right w3-theme">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
