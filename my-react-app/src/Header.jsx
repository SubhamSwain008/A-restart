function Header(){
            return (
                <header>
                    <h1>
                        MY WEB SITE <br />
                        {new Date().getFullYear()}
                    </h1>
                    <nav>
                        <ul>
                            <li><a href='#'>home</a></li>
                            <li><a href='#'>about</a></li>
                            <li><a href='#'>services</a></li>
                            <li><a href='#'>contact</a></li>
                            <li><a href='#'>feed back</a></li>
                        </ul>
                        <hr></hr>
                    </nav>
                </header>
            );
}

export default Header