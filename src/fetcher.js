import axios from "axios"

export const apiPost = async (url,body=null,token="")=>{
    const resp = await axios.post(url,body,{
        headers:{Authorization:`Bearer ${token}`},
        "Content-Type":"application/json"
    });
    return resp.data
}

export const apiUpdate = async (url,body=null,token="")=>{
  const resp = await axios.put(url,body,{
      headers:{Authorization:`Bearer ${token}`},
      "Content-Type":"application/json"
  });
  return resp.data
}

export const apiGet = async (url, token = "") => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  
    return response.data;
  };