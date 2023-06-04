import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import LoginPage from './pages/login'
import RegistrationPage from './pages/signup'
import MainPage from './pages/main'
import PlaylistPage from './pages/playlist'
import FavouritesPage from './pages/favourites'
import NotFoundPage from './pages/not-found'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
