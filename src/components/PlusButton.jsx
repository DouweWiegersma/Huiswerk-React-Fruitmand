import './PlusButton.css'
function PlusButton({fruit, setFruit } ) {

    return (
        <>
        <button className="plusButton"
                onClick={() => setFruit(prev => ({...prev, [fruit]: prev[fruit] + 1}))}> +
        </button>

            </>
)
}

export default PlusButton