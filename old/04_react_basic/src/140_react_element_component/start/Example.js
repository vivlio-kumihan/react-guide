import Container from "./components/Container";
import Profile from "./components/Profile";

const Example = () => {
  const member = [
    { name: "john", part: "vocal, guitar" },
    { name: "paul", part: "vocal, bass" },
  ];

  return (
    <>
      <Container>
        <Profile {...member[0]} />
        <Profile {...member[1]} />
      </Container>
    </>
  );
};

export default Example;




// import React from "react";

// const Bye = () => {
//       return <h2>GoodBye!</h2>;
// }

// const Example = () => {
//   return (
//     <div>
//       <Bye/>
//     </div>
//   );
// };

// console.log(Example());

// export default Example;

