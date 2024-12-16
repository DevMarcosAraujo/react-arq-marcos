
import { useState } from 'react'
import { Link} from 'react-router-dom'

//componetes
import Button from "../Button/Button"

//tudo que tem no assets aqui //

import './Header.css'
import Logo from "../../assets/dnc-logo-2.svg"

function Header () {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen (!isOpen)
    }
    // tem que cria um bottum para fecha mobile que nao esta dando certo no  
    // <nav className={`${isOpen ? 'open' : ''}`}> abiaco delel   //
    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div> 
                                 
                    <nav className={`${isOpen ? 'open' : ''}`}>
                 
                    <ul className="d-flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/Contacts">Contacts</Link></li>
                    </ul>
                </nav>
                </div>
                
            </div>
        </header>
    )
    
}
export default Header