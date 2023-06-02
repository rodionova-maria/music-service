import { Navigate, Outlet } from 'react-router-dom'
import { selectIsAuthenticated } from '../../store/slices/user'
import { useSelector } from 'react-redux'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
