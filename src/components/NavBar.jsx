import "../styles/componets/navbar.sass";

function NavBar() {
    return (
        <>
            <nav>
                <div className="navbar-container">
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Livros</a></li>
                        <li><a href="#services">Colleen hoover</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
