import { createContext } from "react";

const UserContext=createContext(
  {
    loggedin:"default user"
  }
);
export default UserContext;