const Person = ({ name, age, hobbies }) => {
  return (
    <div>
      <h3>
        <b>Name:</b>{" "}
      </h3>{" "}
      {name.length > 8 ? <span>{name.slice(0, 6)}</span> : <span>{name}</span>}
      <p>Learn some information about this person!</p>
      {age >= 18 ? (
        <h3>Please go vote!</h3>
      ) : (
        <h3>You must be 18 or older to vote</h3>
      )}
      <h3>
        <b>Hobbies:</b>
      </h3>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
