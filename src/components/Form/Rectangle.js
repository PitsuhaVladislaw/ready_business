import ReCAPTCHA from "react-google-recaptcha"

function ReCAPTCHAForm() {

    return(
        <form >
            <label htmlFor="name">Name</label>
                <input type="text" id="name" className="input"/>
                <ReCAPTCHA />
            <button>Submit</button>
        </form>
    )
}

export default ReCAPTCHAForm