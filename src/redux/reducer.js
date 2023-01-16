import { createReducer } from "@reduxjs/toolkit";
import { setEmployeeDetail, setEmployeeList } from "./actions";

const initialState={
    list:{},
    detail:{}
}
export const reducer = createReducer(
    initialState,
    (builder)=>{
        builder.addCase(setEmployeeList,(state,action)=>{
            state.list = action.payload
        })
        builder.addCase(setEmployeeDetail,(state,action)=>{
            state.detail = action.payload
        })
    }
)