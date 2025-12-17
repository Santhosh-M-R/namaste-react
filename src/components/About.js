import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <div>
//       <h1>This is about page</h1>
//       <User
//         name={"santhosh"}
//         address={"1/10 A, fisher road"}
//         number={"23453234"}
//       />
//       <UserClass
//         name={"Gowtham"}
//         address={"1/10 A, fisher road"}
//         number={"345432345432"}
//       />
//       <UserClass
//         name={"Santhosh"}
//         address={"1/10 A, fisher road"}
//         number={"345432345432"}
//       />
//       <UserClass
//         name={"Ramesh"}
//         address={"1/10 A, fisher road"}
//         number={"345432345432"}
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>This is about page</h1>
        <User
          name={"santhosh"}
          address={"1/10 A, fisher road"}
          number={"23453234"}
        />
        <UserClass
          name={"Gowtham"}
          address={"1/10 A, fisher road"}
          number={"345432345432"}
        />
        <UserClass
          name={"Santhosh"}
          address={"1/10 A, fisher road"}
          number={"345432345432"}
        />
        <UserClass
          name={"Ramesh"}
          address={"1/10 A, fisher road"}
          number={"345432345432"}
        />
        <div>
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
