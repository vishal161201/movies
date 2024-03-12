import { createSlice } from '@reduxjs/toolkit'

export const homeSlices = createSlice({
  name: 'counter',
  initialState: {
    url:{},
    genres:{}
  },
  reducers: {
getApiConfiguration:(state, action)=>{
state.url = action.payload
},
getGenres:(state, action)=>{
state.genres = action.payload
}
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration , getGenres} = homeSlices.actions

export default homeSlices.reducer