import Button from "../components/Button/Button"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Projectslist from "../components/Projectslist/Projectslist"
import Footer from "../components/Footer/Footer"
import Hero from '../components/Hero/Hero'

function Home() {
    return(
        <>
          <Header />
          <div className="container">
            <Hero />
            <Projectslist />
           </div>
           <Footer />
        </>
    )

}
export default Home




   

    
   

