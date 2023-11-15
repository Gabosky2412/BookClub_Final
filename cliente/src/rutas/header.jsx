import { Link } from "react-router-dom";
import logo from '../logos/logo_header.png';

export default function Header() {

    return(
        <div>
            <nav className="h-24 bg-slate-950 text-white text-center flex items-center justify-center">
                <Link to='/main' >
                        {/* <h2 className="font-bold text-5xl">BOOK CLUB</h2> */}
                        <img src={logo} className=""/>
                </Link>
            </nav>
        </div>
    );
}