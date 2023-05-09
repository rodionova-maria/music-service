import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import LoginPage from './pages/login'
import RegistrationPage from './pages/registration'
import MainPage from './pages/main'
import PlaylistPage from './pages/playlist'
import FavouritesPage from './pages/favourites'
import NotFoundPage from './pages/not-found'

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUser={setUser} user={user} />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user.Login)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
