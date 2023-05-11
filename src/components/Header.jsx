import {Link} from "react-router-dom";
import "../styles/header.scss";
import {HashLink} from "react-router-hash-link"
const Header = ()=>{
    return (
    <nav>
        <h1>TechyStar.</h1>
        <main>
           <HashLink to = {"/"}>Home</HashLink> 
           <Link to = {"/contact"}>contact</Link> 
           <HashLink to = {"/#about"}>About</HashLink> 
           <HashLink to = {"/#brands"}>Brands</HashLink> 
           <Link to = {"/services"}>Services</Link> 
        </main>
    </nav>
    )
}

export default Header;