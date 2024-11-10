import Link from "next/link";
import React from "react";

function Navbar2() {
    return (
        // NavBar
        <div className="navbar">
    <header className="header">
        <div className="container">
            <div className="logo">
                <span className="name">
                    <Link href="#Home">MY <span id="fname">WORK.</span></Link>
                </span>
            </div>
            <nav className="navigation">
                <Link href="/HTML" className="nav-link">Html</Link>
                <Link href="/CSS" className="nav-link">Css</Link>
                <Link href="/typescript" className="nav-link">Typescript</Link>
                <Link href="/NextJs" className="nav-link">NextJs</Link>
                <Link href="#" className="nav-link">Projects</Link>
            </nav>
        </div>
    </header>
</div>
    );
}

export default Navbar2;
