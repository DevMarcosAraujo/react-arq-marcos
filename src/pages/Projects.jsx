
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Projectslist from "../components/Projectslist/Projectslist"
import Footer from "../components/Footer/Footer"
import Hero from '../components/Hero/Hero'

function Projects (){
    return (
        <>
               <Header/>
               <Banner  title="projects" image="projects.jpg"/>
           <div className="container">
              
              <Projectslist />
            </div>    
         <Footer />
        
        </>
    )
}

export default Projects