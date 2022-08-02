// import Name from '../Name'

export default function Nav() {
    return (
        <header className="navbar">
            {/* <Name></Name> */}
            <h1><a href="/">Jonathan A. Price</a></h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="resume">Resumé</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}