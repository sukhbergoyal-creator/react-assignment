import { Link } from "react-router-dom";

function NotFound() {
  return(
  <>
   <h1>NotFound Page</h1>
  <Link to="/home">
    Go Back Home
  </Link>
  </>
  )
}



export default NotFound;