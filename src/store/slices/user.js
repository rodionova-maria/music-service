import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  id: null,
  access: null,
  refresh: null,
  currentTrackID: null,
  //   currentTrack: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: () => initialState,
    setLogin: (state, { payload }) => ({
      ...state,
      id: payload.id,
      isAuthenticated: true,
    }),
    setRefresh: (state, { payload }) => ({
      ...state,
      refresh: payload.refresh,
    }),
    setAccess: (state, { payload }) => ({
      ...state,
      access: payload.access,
    }),
    setCurrentTrackID: (state, { payload }) => ({
      ...state,
      currentTrackID: payload.id,
    }),
    // setCurrentTrack: (state, { payload }) => ({
    //   ...state,
    //   currentTrack: {
    //     ...payload.track,
    //   },
    // }),
  },
})

export const { setLogout, setLogin, setAccess, setRefresh, setCurrentTrackID } = userSlice.actions
export default userSlice.reducer

// это хук
export const selectIsAuthenticated = (state) => state.user.isAuthenticated
export const selectUserID = (state) => Number(state.user.id)
export const selectTokenRefresh = (state) => state.user.refresh
export const selectTokenAccess = (state) => state.user.access
export const selectCurrentTrackID = (state) => state.user.currentTrackID
// export const selectCurrentTrack = (state) => state.user.currentTrack
