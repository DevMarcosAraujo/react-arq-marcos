//assets
import "./Projectslist.css"
import LikedFilled from "../../assets/like-filled.svg"
import Like from "../../assets/like.svg"
import { useState, useEffect } from "react"

//utils

import { getApiData } from "../../services/apiServices"

function Projectslist () {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])
    // tudo assima e das api para chama a função das fotos do nosso site.//
    return (
        <div className="projects-section">
            <div className="projects-hero">
              <h2>Follow Our Projects</h2>
              <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className="projects-grid">
                {
                    projects.map((project) => (
                        <div className="projects-card d-flex jc-center al-center fd-column" key={project.id}>
                            <div className="thumb tertiary-background"
                            style={{backgroundImage: `url(${project.thumb})`}}
                            ></div>
                             <h3>{project.title}</h3>
                             <p>{project.subtitle}</p>
                             <img src={LikedFilled} height="20px" />
                        </div>
                    ))
                }                          
            </div>   
        </div>
    )
}

export default Projectslist