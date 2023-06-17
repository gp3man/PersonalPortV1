import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDummyAsync = createAsyncThunk('fetch/AllDummys', async()=>{
  const {data} = await axios.get('http://localhost:3000/api/users')
  return data
})

const dummySlice = createSlice({
  name:'dummy',
  initialState:{},
  reducers:{},
  extraReducers: (builder)=>{
    builder.addCase(fetchDummyAsync.fulfilled, (state,action)=>{
      return action.payload;
    });
  }
})
export const selectDummy = (state)=>{
    return state.dummy;
  }
export default dummySlice.reducer
