import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

const Navigation = () => {



    return (

        <div>
        <Outlet/>
        <Navbar/>
        </div>
    )
}

export default Navigation;