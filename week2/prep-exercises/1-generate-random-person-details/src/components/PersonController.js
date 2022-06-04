import { useState, useEffect } from "react";
import Person from "./Person";

function PersonController() {
  const [persons, setPersons] = useState(null);
  const [onePerson, setOnePerson] = useState(null);

  const getPersons = () => {
    fetch("https://www.randomuser.me/api?results=10")
      .then((response) => response.json())
      .then((data) => {
        const personsArr = [];
        data.results.forEach((result) => {
          const { email, cell, ...rest } = result;
          const { first, last } = rest.name;
          personsArr.push({ firstName: first, lastName: last, email, cell });
        });
        setPersons(personsArr);
      })
      .catch(console.error);
  };
  const getOnePerson = (key) => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((response) => response.json())
      .then((data) => {
        const { email, cell, ...rest } = data.results[0];
        const { first, last } = rest.name;
        setOnePerson({ firstName: first, lastName: last, email, cell });
      })
      .catch(console.error);
  };

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <ul>
      {persons !== null &&
        persons.map((person, idx) => (
          <Person
            person={person}
            getPersonHandler={getOnePerson}
            key={idx}
          ></Person>
        ))}
    </ul>
  );
}

export default PersonController;
