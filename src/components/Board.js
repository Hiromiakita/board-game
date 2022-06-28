import './board.css';
import Slot from './Slot';

function Board() {
    let boardInfo = [
        [0, 0, 1, 2, 2, 2, 0],
        [0, 0, 0, 0, 2, 1, 1],
        [0, 0, 0, 0, 1, 2, 1],
        [0, 0, 0, 1, 2, 1, 1],
        [0, 0, 1, 2, 1, 1, 0],
        [0, 0, 1, 2, 2, 1, 0],
    ]

    return (
        <div className="container">
           {
            boardInfo.map(row => {
                console.log(row)

                return (<div className='row'>
                    {
                        row.map(column => (<Slot color={column === 1 ? 'red' : column === 2 ? 'yellow': null }></Slot>))
                    }
                </div> )

            })
           }


        </div>
    );
}

export default Board;
