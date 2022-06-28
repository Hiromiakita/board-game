import './slot.css';

function Slot ({color}) {
    return (
        <div className="slot">
            <div className={`round ${color}`}></div>
        </div>
    )
}

export default Slot;