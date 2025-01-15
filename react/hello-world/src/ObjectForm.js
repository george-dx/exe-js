import { useState } from "react";

export default function ObjectForm() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  //   function handleFirstNameChange(e) {
  //     setPerson({
  //       ...person,
  //       firstName: e.target.value,
  //     });
  //   }

  //   function handleLastNameChange(e) {
  //     setPerson({
  //       ...person,
  //       lastName: e.target.value,
  //     });
  //   }

  //   function handleEmailChange(e) {
  //     setPerson({
  //       ...person,
  //       email: e.target.value,
  //     });
  //   }

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
