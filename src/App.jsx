
import './App.css'
import {useState} from "react";

function App() {


const [aarbeien, setAarbeien] = useState(0);
const [bananen, setBananen] = useState(0);
const [appels, setAppels] = useState(0);
const [kiwis, setKiwis] = useState(0);

const reset = () => {
    setAppels(0);
    setBananen(0);
    setAarbeien(0);
    setKiwis(0)
}

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        postcode: "",
        selectedOption: "",
        delivery: "",
        opmerkingen: "",
        termsAndConditions: false
    })

const handleChange = (e) => {
    const { name, value, } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formulier verstuurd:", formData)
    };
  return (
      <>
          <div className="fruitmand">
          <p className="paragraaf">
              <h2>Aardbeien</h2>
              <button className="minButton" onClick={() => setAarbeien(Math.max(0, aarbeien - 1))}> - </button>
              <span> {aarbeien} </span>
              <button className="plusButton" onClick={() => {
                  setAarbeien(aarbeien + 1)}}> + </button>
          </p>
          <p className="paragraaf">
              <h2>Bananen</h2>
              <button className="minButton" onClick={() => setBananen(Math.max(0, bananen - 1))}> - </button>
              <span> {bananen} </span>
              <button className="plusButton" onClick={() => {
                  setBananen(bananen + 1)
              }}> +
              </button>
          </p>
          <p className="paragraaf">
              <h2>Appels</h2>
              <button className="minButton" onClick={() => setAppels(Math.max(0, appels - 1))}> - </button>
              <span> {appels} </span>
              <button className="plusButton" onClick={() => setAppels(appels + 1)}> + </button>
          </p>

          <p className="paragraaf">
              <h2>Kiwis</h2>
          <button className="minButton" onClick={() => setKiwis(Math.max(0, kiwis - 1))}> - </button>
          <span> {kiwis} </span>
          <button className="plusButton" onClick={() => {setKiwis(kiwis + 1)}}> + </button>
      </p>
          <p className="reset">
              <button className="resetButton" onClick={reset}> Reset</button>
          </p>
          </div>

          <form onSubmit={handleSubmit}>
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
                  <select id="bezorgfrequentie" name="selectedOption" value={formData.selectedOption} onChange={handleChange}>
                      <option
                          name="everyWeek"
                          value="everyWeek">Iedere week </option>
                      <option
                          name="everyOtherWeek"
                          value="everyOtherWeek">Om de week</option>
                      <option
                          name="everyMonth"
                          value="everyMonth"> Elke maand</option>
                  </select>
              </label>
              <label>
                  overdag:
                  <input type="radio"
                         name="delivery"
                         value="night"
                         checked={formData.delivery === "night"}
                         onChange={handleChange}/>
              </label>
              <label>
                    avonds:
                  <input type="radio"
                         name="delivery"
                         value="day"
                         checked={formData.delivery === "day"}
                         onChange={handleChange}/>
              </label>
              <label>Opmerkingen:
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
              <button
              type="submit"> Versturen </button>


          </form>
          {formData.form}
          {formData.firstName}
          {formData.selectedOption}
          {formData.delivery}
          {formData.termsAndConditions}

      </>

  )
}

export default App
