import "./styles.css"
export const CharCard = ({char}) => {

    return(<>
        {char.status==="Alive"?
        <div className="vivo card">
            <h1>{char.name}</h1>
            <img src={char.image} alt="" />
        </div>
        :
        <div className="morto card">
            <h1>{char.name}</h1>
            <img src={char.image} alt="" />
        </div>
        
        }
        </>) 
    
}