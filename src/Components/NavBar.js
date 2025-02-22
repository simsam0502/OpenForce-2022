import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./styles/NavBar.css";
import { useHistory } from "react-router-dom";

library.add(faBars);

function NavBar() {
    const history = useHistory();
    const moveTo = (a)=>{
        history.push(`/#${a}`);
        document.getElementById("root").scrollTop=document.getElementById(a).offsetTop;
    }
    const scrollTop = ()=>{
        setTimeout(()=>{
            document.querySelector('.scrollTop').click();
        },10)
    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{minHeight:"60px"}}>
            <Link to="/" onClick={scrollTop} data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <img src="./images/Logo.svg" alt="/"/>
            </Link>
            <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {/* <span className="navbar-toggler-icon"></span> */}
                {/* <i className="fas fa-bars"></i> */}
                <FontAwesomeIcon icon="bars" className="navOpenBtn"/>

            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <Link className="nav-item px-3" to="/" onClick={scrollTop}>
                        <p className="nav-link text-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Home</p>
                    </Link>
                    <Link className="nav-item px-3" to="/swags">
                        <p className="nav-link text-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Prizes</p>
                    </Link>
                    <Link className="nav-item px-3" to="/" onClick={()=>{moveTo("issueLink")}}>
                        <p className="nav-link text-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Issues</p>
                    </Link>
                    <Link className="nav-item px-3" to="/challenges">
                        <p className="nav-link text-light" data-bs-toggle="collapse">Challenges</p>
                    </Link>
                    <Link className="nav-item px-3" to="/" onClick={()=>{moveTo("sessionsLink")}}>
                        <p className="nav-link text-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Sessions</p>
                    </Link>
                    <Link className="nav-item px-3" to="/" onClick={()=>{moveTo("sponserLink")}}>
                        <p className="nav-link text-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Sponsors</p>
                    </Link>
                    <a className="nav-item px-3" href="https://forms.gle/VBqnNxuYUVdwHKgy6" target="_blank">
                        <p className="nav-link text-light" data-bs-toggle="collapse" data-bs-target="#navbarNav">Register</p>
                    </a>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;
