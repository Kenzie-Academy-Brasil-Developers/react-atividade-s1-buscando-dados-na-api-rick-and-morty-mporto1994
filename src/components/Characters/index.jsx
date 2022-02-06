import "./styles.css"
import {CharCard} from "../CharCard"

export const Characters = ({prop})=>{
    return(
        <div>
            {prop.map((char, index)=>(
                char.status==="Alive"?(
                    <CharCard key={index} className="vivo" char={char}/>)
                :
                    <CharCard key={index} className="morto" char={char}/>)
                )}
                
        </div>
    )
}