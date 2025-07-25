import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Skill.css'; 
import { useSelector } from 'react-redux';
import axios from 'axios';
function Skills() {
    const { register, handleSubmit, reset } = useForm();
    const [skills, setSkills] = useState([]);
    let {loginStatus,adminDetails}=useSelector(state=>state.adminLogin)
    useEffect(() => {
        getSkills();
    }, []);
    let axioWithToken=axios.create({headers:{
            Authorization:'Bearer '+sessionStorage.getItem('token')
        }})
    async function getSkills() {
        const res = await axios.get('http://localhost:4000/admin-api/skills');
        setSkills(res.data.payload); 
    }
    async function addSkill(data) {
        data.skill=data.skill.toUpperCase()
        try{
        const res = await axioWithToken.post('http://localhost:4000/admin-api/skill', data);
        console.log(res)
        if (res.status==200 && res.data.respond=='added!') {
            getSkills()
        }else if(res.status==200 && res.data.respond=='duplicate!')
        {
            alert(res.data.message)
        }
        reset(); 
    }
    catch(err)
    {
        alert(err.message)
    }
    }

    return (
        <div className="skills-container">
              {
                skills.length==0?<p className='no-skills'>No skills added.</p>:
                <h2 className='skills-title'>Hands-on experience with...</h2>
              }
            {   
                loginStatus && 
                <form className="skill-form" onSubmit={handleSubmit(addSkill)}>
                <input
                    type="text"
                    placeholder="Enter a new skill..."
                    {...register('skill', { required: true })}
                    className="skill-input"
                />
                <button type="submit" className="skill-button">Add</button>
                </form>
            }
            {
                loginStatus && skills.length!=0 && <p className='delete-tip'>To delete a skill, double-click on it.</p>
            }
            <div className="skills-grid">
                {skills.map((skill,index) => (
                    <div key={index}>
                        <button className="skill-tag" onDoubleClick={async()=>{
                        if(loginStatus==true){
                        if(window.confirm('Are You want to delete?')){
                        try{
                        let res=await axioWithToken.delete(`http://localhost:4000/admin-api/skills/${skill.skill}`)
                        console.log(res)
                        if(res.status==200 && res.data.respond=='deleted!')
                        {
                            getSkills()
                        }
                        }catch(err){
                            alert(err.message)
                        }
                        }
                    }
                        }}>{skill.skill}</button>
                    </div>
                ))}
            </div>

        </div> 
        
    );
}

export default Skills;
