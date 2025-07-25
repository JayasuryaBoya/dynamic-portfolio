import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export let userReq=createAsyncThunk('/admin-login',async(userData,thunkApi)=>{
try{
let res=await axios.post('http://localhost:4000/admin-api/login',userData)
if(res.status==200){
if(res.data.message=='okay!')
{
    sessionStorage.setItem('token',res.data.token)
}else{
    return thunkApi.rejectWithValue(res.data.message)
}
}
return res.data
}catch(err)
{
    return thunkApi.rejectWithValue(err)
}
})
export let userSlice=createSlice({
    name:'AdminLogin',
    initialState:{
            ispending:false,
            adminDetails:[],
            errMsg:'',
            loginStatus:false,
    },
    reducers:{
        resetUser:(state,action)=>
        {
            state.ispending=false
            state.adminDetails=[]
            state.errMsg=''
            state.loginStatus=false
        }
    },
    extraReducers:builder=>{
        builder.addCase(userReq.pending,(state,action)=>{
            state.ispending=true
        })
        builder.addCase(userReq.fulfilled,(state,action)=>{
            state.ispending=false
            state.loginStatus=true
            state.adminDetails=action.payload
            state.errMsg=''
        })
        builder.addCase(userReq.rejected,(state,action)=>{
            state.ispending=false
            state.errMsg=action.error.message
        })
    }
})

export let {resetUser}=userSlice.actions

export default userSlice.reducer