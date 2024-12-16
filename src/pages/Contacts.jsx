import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import ContactForm from "../components/ContactForm/ContactForm"


function Contacts() {
    return(
        <>
        <Header />
        <Banner title="Contacts" image="contacts.jpg" />
         <div className="container">
            <ContactForm />
         </div>
         <Footer />
        </>
    )
}

export default Contacts