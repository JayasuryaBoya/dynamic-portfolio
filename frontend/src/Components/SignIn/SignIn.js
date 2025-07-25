import { useForm } from 'react-hook-form';
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { userReq } from '../../reduxstore/Slices/AdminSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SignIn() {
  let navigate=useNavigate()
  const dispatch = useDispatch();
  const { register, handleSubmit ,reset} = useForm();
  let {errMsg,loginStatus}=useSelector(state=>state.adminLogin)  
  function loginFunction(credential) {
    dispatch(userReq(credential));
    reset()
  }
  useEffect(()=>{
    if(errMsg!='')
      alert('Your are not a admin....!')
    if(loginStatus==true)
      navigate('/')
  },[errMsg,loginStatus])
  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit(loginFunction)}>
        <h1 className="form-title">Sign In</h1>
        <div className="user-type">
          <label>
            <input
              type="radio"
              {...register('userType', { required: true })}
              value="admin"
             checked/>
            Admin
          </label>
        </div>
        <input
          className="input-field"
          placeholder="Username"
          type="text"
          {...register('username', { required: true })}
        />
        <input
          className="input-field"
          placeholder="Password"
          type="password"
          {...register('password', { required: true })}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
