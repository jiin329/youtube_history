import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../domain/SignIn";


const router = createBrowserRouter([
    {
        path : "/",
        element : <SignIn />
    }
])  
export default router