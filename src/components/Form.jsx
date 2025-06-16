import './Form.css'


function Form({handleSubmit, handleChange, formData}) {

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Bestel Formulier</h1>
                <div className="formBox">
                    <label>
                        Voornaam:
                        <input type="text"
                               name="firstName"
                               value={formData.firstName}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        Achternaam:
                        <input type="text"
                               name="lastName"
                               value={formData.lastName}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        Leeftijd:
                        <input type="number"
                               name="age"
                               checked={formData.age}
                               onChange={handleChange}/>

                    </label>
                    <label>
                        Postcode:
                        <input type="text"
                               name="postcode"
                               value={formData.postcode}
                               onChange={handleChange}/>
                    </label>

                    <label>
                        bezorg frequentie:
                        <select id="bezorgfrequentie" name="selectedOption" value={formData.selectedOption}
                                onChange={handleChange}>
                            <option
                                name="everyWeek"
                                value="everyWeek">Iedere week
                            </option>
                            <option
                                name="everyOtherWeek"
                                value="everyOtherWeek">Om de week
                            </option>
                            <option
                                name="everyMonth"
                                value="everyMonth"> Elke maand
                            </option>
                        </select>
                    </label>
                    <label>
                        overdag:
                        <input type="radio"
                               name="delivery"
                               value="night"
                               checked={formData.delivery === "night"}
                               onChange={handleChange}
                        />
                    </label>
                    <label>
                        avonds:
                        <input type="radio"
                               name="delivery"
                               value="day"
                               checked={formData.delivery === "day"}
                               onChange={handleChange}/>
                    </label>
                    <label className="labels">Opmerkingen:
                        <textarea
                            value={formData.opmerkingen}
                            name="opmerkingen"
                            onChange={handleChange}
                            rows="6"
                            cols="50">
              </textarea>
                    </label>
                    <label>
                        Akkoord met de voorwaarden
                        <input type="checkbox"
                               name="termsAndConditions"
                               checked={formData.termsAndConditions}
                               onChange={handleChange}/>
                    </label>
                    <button className="submitButton"
                            type="submit"> Versturen
                    </button>
                </div>
            </form>

        </>
    );
}



export default Form;