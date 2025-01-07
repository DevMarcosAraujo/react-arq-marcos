
import "./ContactForm.css"
//components
import Button from '../Button/Button'

function ContactForm () {
    return(
            <div className="contact-form d-flex fd-column al-center">
            <h2>We love meeting new people and helping them.</h2>
            <form>
                <div className="d-flex form-goup">
                    <input 
                    className="form-imput"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name *"
                    />
                    <input 
                    className="form-imput"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Emai *"
                    />
                    <textarea
                        className="from-input"
                        id="message"
                        name="message"
                        placeholder="Mensagem *"
                        rows="4"
                        ></textarea>
                    <div>
                        <Button type="submit" buttonStyle="primary">
                          Enviar
                        </Button>
                    </div>
                    

                </div>
            </form>
            </div>
    )
}

export default ContactForm