export default function Validation(props){
const{onChange, value, onClick,score, failures, handleDelete}= props
    return(

        <div>
            <input value={value} onChange={onChange}/>
            <button onClick={onClick}>VALIDATE HERE</button>
            <h3>Score:{score}</h3>
            <h3>Failures:{failures}</h3>
            <button onClick={handleDelete}>Delete input</button>
        </div>
    );
}