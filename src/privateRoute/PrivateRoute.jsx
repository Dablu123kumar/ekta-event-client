import { Navigate } from "react-router-dom"
import { UseAuth } from "../context/ContextApi"

const PrivateRoute = ({ children })=>{
    const [authUser] = UseAuth()
    //console.log('useAuth', authUser.role)
    return authUser.role === 'ADMIN' ? children : <Navigate to='/' />
}

export default PrivateRoute