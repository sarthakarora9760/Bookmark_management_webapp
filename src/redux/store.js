import { configureStore } from '@reduxjs/toolkit'
import usernamereducer from "../redux/username/usernameSlice.js"
import passwordreducer from "../redux/password/passwordSlice.js"
export const store = configureStore({
  reducer: {
    username: usernamereducer,
    password: passwordreducer
  },
})