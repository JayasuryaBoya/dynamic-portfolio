
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import './ProjectForm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import ErrorPage from '../../ErrorPage/Errorpage'
function ProjectForm() {
  const { adminDetails,loginStatus } = useSelector(state => state.adminLogin);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [tools, setTools] = useState(state?.tools || []);
  const [tool, setTool] = useState("");
  const [projectSuccess, setProjectSuccess] = useState(false);

  async function projectFunction(newProject) {
    newProject.tools = tools;
    newProject.status = true;
    newProject.projectId = state?.projectId || Date.now();
    newProject.developer = adminDetails.payload.username;
    const axiosWithToken = axios.create({
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    });

    try {
      if (state) {
        delete state._id;
        await axiosWithToken.put('http://localhost:4000/admin-api/project', newProject);
      } else {
        await axiosWithToken.post('http://localhost:4000/admin-api/project', newProject);
      }
      setProjectSuccess(true);
      reset();
      setTools([]);
    } catch (err) {
      console.error("Project submission failed:", err.message);
    }
  }

  useEffect(() => {
    if (projectSuccess) navigate('/projects');
  }, [projectSuccess]);

  const handleAddTool = (e) => {
    e.preventDefault();
    if (tool.trim()) {
      if((tools.findIndex(toolInList=>toolInList==tool))==-1){
         setTools([...tools, tool.trim()]);
      }
       setTool('');
    }
  };

  const handleRemoveTool = (index) => {
    setTools(tools.filter((_, i) => i !== index));
  };

  return (
    <>
    {
      loginStatus?<div className="project-form">
        <h2 className="project-form-heading">
        {state ? "Edit Project Details" : "Create a New Project"}
      </h2>
      {state && <p className="form-subtext">Update your project information below.</p>}

      <form onSubmit={handleSubmit(projectFunction)}>
        <input
          type="text"
          placeholder="Project Title"
          {...register('title',{required:true})}
          defaultValue={state?.title}
        />
        <textarea
          placeholder="Project Objective"
          rows="4"
          {...register('objective',{required:true})}
          defaultValue={state?.objective}
        />

        <div className="tools">
          <label className="tool-label">Tools Used</label>
          <div className="tool-input-group">
            <input
              type="text"
              placeholder="Enter a tool"
              value={tool}
              onChange={(e) => setTool((e.target.value).toLowerCase())}
              id="tool-input"
            />
            <button className="add-tool-button" onClick={handleAddTool}>Add Tool</button>
          </div>

          <div className="tool-tags">
            {tools.map((t, idx) => (
              <span className="tool-tag" key={idx}>
                {t}
                <button type="button" onClick={() => handleRemoveTool(idx)} className="remove-tool-btn">×</button>
              </span>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-submit">
          {state ? "Update Project" : "Submit Project"}
        </button>
      </form>
    </div>:<ErrorPage/>
    };
    </>
  );
}

export default ProjectForm;
