import { cardList } from "../../data";
import { Cards } from "../Cards/Cards";

export function Columns({ status, cardList}) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{status}</p>
            </div>
            <div className="cards">
                {
                    cardList.map((card) =>  
                    <Cards key={card.id}{...card}/>)
                } 
                    
            </div>
           
        </div>
    )
}
