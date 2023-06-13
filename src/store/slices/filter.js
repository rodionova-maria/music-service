import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  author: [],
  genre: [],
  year: [],
  search: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setAuthor: (state, { payload }) => ({
      ...state,
      author: [...state.author, payload],
    }),
    setGenre: (state, { payload }) => ({
      ...state,
      genre: [...state.genre, payload],
    }),
    setYear: (state, { payload }) => ({
      ...state,
      year: [payload],
    }),
    delAuthor: (state, { payload }) => ({
      ...state,
      author: state.author.filter((el) => el !== payload),
    }),
    delGenre: (state, { payload }) => ({
      ...state,
      genre: state.genre.filter((el) => el !== payload),
    }),
    delYear: (state) => ({
      ...state,
      year: [],
    }),
    setSearch: (state, { payload }) => ({
      ...state,
      search: payload,
    }),
  },
})

export const { setAuthor, setGenre, setYear, delAuthor, delGenre, delYear, setSearch } = filterSlice.actions
export default filterSlice.reducer

export const selectAuthor = (state) => state.filter.author
export const selectGenre = (state) => state.filter.genre
export const selectYear = (state) => state.filter.year
export const selectSearch = (state) => state.filter.search
