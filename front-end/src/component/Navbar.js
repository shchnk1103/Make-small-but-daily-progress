import React from "react";

export const Navbar = () => {
    const [activeLink, setActiveLink] = React.useState("home")

    const updateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://github.com/shchnk1103">MySite</a>
                <button className="navbar-toggler toggler-btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*left*/}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                href="#home"
                                className={activeLink === "home" ? "nav-link active" : "nav-link"}
                                onClick={() => updateActiveLink("home")}
                            >Home</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#articleCards"
                                className={activeLink === "articleCards" ? "nav-link active" : "nav-link"}
                                onClick={() => updateActiveLink("articleCards")}
                            >ArticleCards</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#fetchData"
                                className={activeLink === "fetchData" ? "nav-link active" : "nav-link"}
                                onClick={() => updateActiveLink("fetchData")}
                            >UserList</a>
                        </li>
                    </ul>

                    {/*right*/}
                    <div className="login-signup-box">
                        <div className="nav-item">
                            <button type="button" className="btn btn-link px-3 me-2 login-btn">
                                LOGIN
                            </button>
                        </div>
                        <div className="nav-item">
                            <button type="button" className="btn btn-primary me-3 signup-btn">
                                SIGN UP FOR FREE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
