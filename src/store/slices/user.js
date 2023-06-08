import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  id: null,
  access: null,
  refresh: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: () => initialState,
    setLogin: (state, { payload }) => {
      return {
        ...state,
        id: payload.id,
        isAuthenticated: true,
      }
    },
    setRefresh: (state, { payload }) => {
      return {
        ...state,
        refresh: payload.refresh,
      }
    },
    setAccess: (state, { payload }) => {
      return {
        ...state,
        access: payload.access,
      }
    },
  },
})

export const { setLogout, setLogin, setAccess, setRefresh } = userSlice.actions
export default userSlice.reducer

// это хук
export const selectIsAuthenticated = (state) => state.user.isAuthenticated
export const selectUserID = (state) => Number(state.user.id)
export const selectTokenRefresh = (state) => state.user.refresh
export const selectTokenAccess = (state) => state.user.access
