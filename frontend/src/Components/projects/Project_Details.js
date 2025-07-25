import { MdCloseFullscreen } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import './Project_Details.css'; 
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
function ProjectDetails() {
   let navigate=useNavigate()
   let {loginStatus}=useSelector(state=>state.adminLogin)
    let {state}=useLocation();
    console.log(state);
  let axiosWithToken=axios.create({
        headers:{
            Authorization:'Bearer '+sessionStorage.getItem('token')
        }
    })
  return (
    <div className="project-container">
      <div className="button-group">
          <button className="btn btn-completed" onClick={() =>navigate('/projects')}><MdCloseFullscreen/></button>
        </div>
        <>
          {
             loginStatus &&
                <div className="button-group">
                <button className="btn btn-edit" onClick={() => navigate('/project-form',{state:state})}><CiEdit/></button>
                <button className="btn btn-delete" onClick={ async()=>{
                 
                  if(window.confirm("Are You want delete the Project?...")){
                   try{
                  await axiosWithToken.delete(`http://localhost:4000/admin-api/project/${state.projectId}`)
                  }catch(err){
                    alert(err.message)
                  }
                  navigate('/projects')
                }
                }} ><MdDeleteOutline/></button>
                </div>
          } 
          <div className="project-title">{state.title}</div>
          <div className="project-description">{state.objective}</div>
           <p className="project-objective">Technologies: {
      state.tools.map((tool,index)  =><strong key={index}>{tool+", "}</strong>) 
        }</p>
        <p>{state.developer}</p>
        </>
    </div>
  );
}

export default ProjectDetails;
