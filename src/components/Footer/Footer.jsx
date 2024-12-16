import { Link } from 'react-router-dom'

//toda as imagens assets//
import'./Footer.css'
import brasil from '../../assets/brasil.svg'
import usa from '../../assets/usa.svg'
import facebook from '../../assets/facebook.svg'
import x from '../../assets/x.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import Logo from '../../assets/dnc-logo-2.svg'

function Footer () {
    return(
        <footer>
            <div className="container">
                <div className="al-center d-flex jc-space-between mobile-fd-column ">
                    <div className="d-flex jc-space-between">
                        <div className="footer-logo-col ">
                             <img src={Logo} className="footer-logo" /> 
                             <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>   
                            <div className='d-flex social-links'>
                                <a href='https://google.com' target='-blank'>
                                    <img src={facebook} />
                                </a>
                                <a href='https://google.com' target='-blank'>
                                    <img src={x} />
                                </a>
                                <a href='https://google.com' target='-blank'>
                                    <img src={linkedin} />
                                </a>
                                <a href='https://google.com' target='-blank'>
                                    <img src={instagram} />
                                </a>
                            </div>
                           </div>
                           <div className="d-flex mobile-fd-column">
                                <div className="footer-col">
                                    <h3>Pages</h3>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Projects">Projects</Link></li>
                                         <li><Link to="/Contacts">Contacts</Link></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h3>Contacts</h3>
                                    <p className="grey-1-color">
                                    R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030
                                    </p>
                                    <p className="grey-1-color">
                                    suporte@escoladnc.com.br
                                    </p>
                                    <p className="grey-1-color">
                                    (19) 99187-4342
                                    </p>
                                </div>
                        </div>                       
                    
                    </div>
                    
                </div>
                <div className="d-flex jc-space-between footer-copy ">
                        <p className="grey-1-color"> Copyright © Estudos Marcos-2024 </p>
                        <div className="langs-area d-flex">
                        <img src={brasil} height="29px" />
                        <img src={usa} height="29px" />
                        </div>
                    </div>
            </div>
        </footer>
    )
    
}
export default Footer