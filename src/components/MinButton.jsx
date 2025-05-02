import "./MinButton.css"

function MinButton( { fruit, setFruit } ){
    return(
        <button className="minButton"
        onClick={() => setFruit(prev => ({...prev, [fruit]: Math.max(prev[fruit] - 1, 0)}))}> -
    </button>
    )
}

export default MinButton