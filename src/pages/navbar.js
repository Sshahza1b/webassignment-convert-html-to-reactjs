import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <nav>
        <ul>
            <li>
                <a href="aboutus.html" class="logo">
                    <img src={process.env.PUBLIC_URL + '/asset/Attendance.png'} alt="logo"/>
                   
                    <span className="nav-iten">Welcome </span>
                </a>
            </li>
            <li>
                    <span className="nav-item">Dashboard</span>
               
            </li>
            <li><a href="#">
                    <span className="nav-item">Message</span>
                </a>
            </li>
            <li><Link to='/attendance'>

                    <span className="nav-item">Attendance</span>
                </Link>
            </li>
            <li><a href="#">

                    <span className="nav-item">Settings</span>
                </a>
            </li>
            <li><a href="#">

                    <span className="nav-item">Report</span>
                </a>
            </li>
            <li><a href="#" class="logout">

                    <span class="nav-item">Logout</span>
                </a>
            </li>
        </ul>
    </nav>

    )
}

export default Navbar;