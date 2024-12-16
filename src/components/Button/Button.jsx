import { Link} from 'react-router-dom'

//tudo que tem no assets aqui //
import './button.css'
import WhiteArrow from '../../assets/whitearrow.svg'


function Button ({ arrow, buttonStyle, loading, children, ...props }) {
    return(
        <button className={`button ${buttonStyle}`}>
            {children} {arrow && <img src={WhiteArrow} />}
        </button>
    )
    
}
export default Button