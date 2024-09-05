const Profile = ({ name, age, hobby = [] }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Hobby:
        <ul>
          {hobby.map(item => <li>{item}</li>)}
        </ul> 
      </div>
    </div>
  );
};

export default Profile;
