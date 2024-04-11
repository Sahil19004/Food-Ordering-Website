import { useRouteError } from "react-router-dom";
const Error=()=>{
  const err=useRouteError()
  return (
    <div>
      {err.status}
      <h1>oops something went wrong......</h1>
    </div>
  )
};
export default Error;