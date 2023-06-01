import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  username: null,
  token: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      return {
        ...state,
        username: action.payload.id,
        token: action.payload.token,
        isAuthenticated: true,
      }
    },
  },
})

export const { logout, setUser } = slice.actions
export default slice.reducer

// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
