import './App.css'
import {useState} from "react";
import Reset from "./components/Reset.jsx";
import PlusButton from "./components/PlusButton.jsx";
import MinButton from "./components/MinButton.jsx";
import Form from "./components/Form.jsx";

function App() {

const [fruit, setFruit] = useState({
    aarbeien: 0,
    bananen: 0,
    appels: 0,
    kiwis: 0,
})
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
    const { name, value,} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formulier verstuurd:", formData, fruit)
    };

  return (
      <>
          <div className="fruitmand">
              <p className="paragraaf">
                  <h2>Aardbeien</h2>
                  <PlusButton setFruit={setFruit} fruit="aarbeien"/>
                  <span> {fruit.aarbeien} </span>
                  <MinButton setFruit={setFruit} fruit={"aarbeien"}/>
              </p>
              <p className="paragraaf">
                  <h2>Bananen</h2>
                  <PlusButton setFruit={setFruit} fruit="bananen"/>
                  <span> {fruit.bananen} </span>
                  <MinButton setFruit={setFruit} fruit={"bananen"}/>
              </p>

              <p className="paragraaf">
                  <h2>Appels</h2>
                  <PlusButton setFruit={setFruit} fruit="appels"/>
                  <span> {fruit.appels} </span>
                  <MinButton setFruit={setFruit} fruit={"appels"}/>
              </p>
              <p className="paragraaf">
                  <h2>Kiwis</h2>
                  <PlusButton setFruit={setFruit} fruit="kiwis"/>
                  <span> {fruit.kiwis} </span>
                  <MinButton setFruit={setFruit} fruit={"kiwis"}/>
              </p>
                    <Reset setFruit={setFruit}/>
          </div>
          <Form handleSubmit={handleSubmit} formData={formData} handlechange={handleChange}/>

      </>

  )
}

export default App
