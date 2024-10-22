function Header(){
    const AllStyles ={
        color: "red", 
        backgroundColor:"lightblue" 
    }
    return (
        <header>
            <h1 style={AllStyles}>My App</h1>
            <nav>
                <ul>
                    <li ><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;