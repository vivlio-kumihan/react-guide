const Profile = ({ name, age, hobbies }) => {
  return (
    <>
      <hr />
      <div>Name: { name }</div>
      <div>Age: { age }</div>
      <div>
        <div>Hobby:</div>
        <ul>
          { hobbies.map((hobby) => (
            <li key={ hobby }>{ hobby }</li>
          )) }
        </ul>
      </div>
    </>
  );
};

export default Profile;
