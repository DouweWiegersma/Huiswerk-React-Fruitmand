import "./Reset.css"
function Reset({setFruit}){
    const reset = () => { setFruit({
        aarbeien: 0,
        bananen: 0,
        appels: 0,
        kiwis: 0,
    })
    }
    return(
        <>
            <p className="reset">
                <button className="resetButton" onClick={reset}>Reset</button>
            </p>
        </>
    )
}


export default Reset