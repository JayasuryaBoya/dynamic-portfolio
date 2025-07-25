import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import './Project.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Project() {
     let {loginStatus}=useSelector(state=>state.adminLogin)
    let [projects,setProjects]=useState([])
    let [deleteStatus,setDeleteStatus]=useState(false)
    let navigate=useNavigate()
    async function getProjects() {
      let res=await axios.get('http://localhost:4000/admin-api/projects')
      console.log(res)
      setProjects(res.data.payload)
    }
    useEffect(()=>{
      getProjects()
    },[deleteStatus])
  return (
    <>
    <div className="project-section">
    {
        projects.length!=0? <h2 className='project-heading'>My Projects</h2>:<p className="no-projects">No projects found.</p>
    }
 
  <div className='project'>
      {
      projects.map((project) => (
  <div key={project.projectId} className="project-card">
    <h2 className="project-title">{project.title}</h2>
    <p className="project-objective">{project.objective.substring(0, 100)}...</p>
    <p className="project-objective">Technologies: {
      project.tools.map((tool,index)  =><strong key={index}>{tool+", "}</strong>) 
      }</p>
    <p style={{textAlign:'end',color:'#555'}}>{project.developer}</p>
    <button className="explore-btn" onClick={()=>{
      navigate('/project-details',{state:project})
    }}><BsArrowUpRightSquareFill  className="explore-icon"/></button>
  </div>
))}
        </div>
      {
        loginStatus && <div className='add-project'>
            <button onClick={()=>{
                navigate('/project-form')
            }} className="btn btn-add"><IoAdd className="add-icon"/></button>
        </div>
      }
      </div>
    </>
  )
}

export default Project