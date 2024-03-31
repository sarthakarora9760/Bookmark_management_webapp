import { createSlice } from '@reduxjs/toolkit'

function getusername(){
    return localStorage.getItem("username")
}
const initialState = {
  value: getusername()
}

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setusername: (state, action) => {
      state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setusername } = usernameSlice.actions

export default usernameSlice.reducer