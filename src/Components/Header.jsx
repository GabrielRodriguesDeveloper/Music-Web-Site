import '../Styles/Header.css'
import logo from "../assets/logo.png"


function Header() {

    return(
        <header class='header headerContainer'>
            <div class="headerItem">
                <img src={logo} alt='logo website' class='logo headerItem'/>
                <h1 className='title'>Music Web Site Name</h1>
            </div>
            <div class="headerItem" id='userArea'>
                <p class='username userArea'>Username</p>
                <div class='userArea' id='usernamePhoto'  alt="User Photo"  ></div>
            </div>
        </header>
    );
}

export default Header