import axios from 'axios';
const serverUrl="https://todoapp-server-jobl.onrender.com/api/v1";

export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:"loginRequest"});

        const {data}=await axios.post(`${serverUrl}/login`, {email,password},{
            headers:{
                "Content-Type":"application/json", 
            } 
        });

        dispatch({type:"loginSuccess", payload:data});

    } catch (error) {
        dispatch({type:"loginFailure", payload:error.response.data.message})
    }
}
export const loadUser=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:"loadUserRequest"});

        const {data}=await axios.get(`${serverUrl}/myProfile`);

        dispatch({type:"loadUserSuccess", payload:data});
        
    } catch (error) {
        dispatch({type:"loadUserFailure", payload:error.response.data.message})
    }
}
export const logout=()=>async(dispatch)=>{
    try {
        dispatch({type:"logoutRequest"});

        await axios.get(`${serverUrl}/logout`);

        dispatch({type:"logoutSuccess"});
        
    } catch (error) {
        dispatch({type:"logoutFailure", payload:error.response.data.message})
    }
}
export const addTask=(title,description)=>async(dispatch)=>{
    try {
        dispatch({type:"addTaskRequest"});

        const {data}=await axios.post(`${serverUrl}/newTask`,{title,description},{
            headers:{
                "Content-Type":"application/json",
            },
        });

        dispatch({type:"addTaskSuccess", payload:data.message});
        
    } catch (error) {
        dispatch({type:"addTaskFailure", payload:error.response.data.message})
    }
}
export const updateTask=(taskId)=>async(dispatch)=>{
    try {
        dispatch({type:"updateTaskRequest"});

        const {data}=await axios.get(`${serverUrl}/task/:${taskId}`);

        dispatch({type:"updateTaskSuccess", payload:data.message});
        
    } catch (error) {
        dispatch({type:"updateTaskFailure", payload:error.response.data.message})
    }
}
export const deleteTask=(taskId)=>async(dispatch)=>{
    try {
        dispatch({type:"deleteTaskRequest"});

        const {data}=await axios.delete(`${serverUrl}/task/${taskId}`);

        dispatch({type:"deleteTaskSuccess", payload:data.message});
        
    } catch (error) {
        dispatch({type:"deleteTaskFailure", payload:error.response.data.message})
    }
}
export const register=(formData)=>async(dispatch)=>{
    try {
        dispatch({type:"registerRequest"});

        const {data}=await axios.post(`${serverUrl}/register`,formData,{
            headers:{
                "Content-type":"multipart/form-data"
            }
        })

        dispatch({type:"registerSuccess", payload:data});
        
    } catch (error) {
        dispatch({type:"registerFailure", payload:error.response.data.message})
    }
}
export const verify = (otp) => async (dispatch) => {
    try {
      dispatch({ type: "verificationRequest" });
  
      const { data } = await axios.post(
        `${serverUrl}/verify`,
        {otp},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({ type: "verificationSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "verificationFailure",
        payload: error.response.data.message,
      });
    }
  };
  
  export const forgotPassword = (email) => async (dispatch) => {
    try {
      dispatch({ type: "forgotPasswordRequest" });
  
      const { data } = await axios.post(
        `${serverUrl}/forgotPassword`,
        {email},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({ type: "forgotPasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "forgotPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };
  export const resetPassword = (otp,newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "resetPasswordRequest" });
  
      const { data } = await axios.put(
        `${serverUrl}/resetPassword`,
        {otp,newPassword},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({ type: "resetPasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "resetPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };