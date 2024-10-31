import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login
                         ">Login</Link>
                    </li>
                    <li>
                        <Link to="/SignupForm
                         ">signup</Link>
                    </li>

                    <li>
                        <Link to="/HomePage
                         ">HomePage</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar