import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  username: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: () => initialState,
    setLogin: (state, { payload }) => {
      return {
        ...state,
        username: payload?.username,
        id: payload.id,
        token: payload.token,
        isAuthenticated: true,
      }
    },
  },
})

export const { setLogout, setLogin } = userSlice.actions
export default userSlice.reducer

// это хук
export const selectIsAuthenticated = (state) => state.user.isAuthenticated
