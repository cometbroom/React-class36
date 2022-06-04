import "./Person.css";

function Person(props) {
    return (
        <div>
        <ul>
          { props.person !== null &&
            Object.keys(props.person).map((item, idx) => <li key={idx}>{`${item}: ${props.person[item]}`}</li>)
          }
        </ul>
        <button onClick={() => props.getPersonHandler(props.key)}>Get New</button>
        </div>
    )
  
}

export default Person;