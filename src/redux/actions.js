import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { EMPLOYEES_LIST, EMPLOYEE_DETAILS } from "../endpoints";
import { apiGet } from "../fetcher";


export const list = createAsyncThunk('listing/emp', async (_,{dispatch}) => {
    console.log("_first")
    try{
    const response = await apiGet(EMPLOYEES_LIST)
    toast(response.message)
    dispatch(setEmployeeList(response))
    }catch(err){
      if (err.response.status === 429) {
        toast('Wait for 1 Minute')
      }
    }
  })

  export const detail = createAsyncThunk('detail/emp', async (id,{dispatch}) => {
    console.log("dd")
    try{
    const response = await apiGet(EMPLOYEE_DETAILS+'/'+id)
    toast(response.message)
    dispatch(setEmployeeDetail(response))
    }catch(err){
      if (err.response.status === 429) {
        toast('Wait for 1 Minute')
      }
    }
  })  
export const setEmployeeList = createAction("listing/emp",
(data)=>({payload:data}))
export const setEmployeeDetail = createAction("detail/emp",
(data)=>({payload:data}))
