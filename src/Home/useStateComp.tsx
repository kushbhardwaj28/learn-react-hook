import { useState } from "react";

interface IUserDetails {
  userName?: string;
  password: string;
}
export const UseStateComp = () => {
  const [userName, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const [userDetails, updateUserDetails] = useState<IUserDetails>({userName: 'Kush', password: ''});
 
  const setUserDetails = () => {
    updateUserDetails((prevState) => {
        return {
            ...prevState,
            password
        };
    });
    // updateUserDetails({
    //         password
    //     });
  };

  return (
    <>
      <input
        type="text"
        placeholder="User Name"
        onChange={(event) => {
          updateUserName(event.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          updatePassword(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setUserDetails();
        }}
      >
        {" "}
        Submit
      </button>
      <br />
      <span>
        User Details are: {userDetails?.userName}, {userDetails?.password}
      </span>
    </>
  );
};
