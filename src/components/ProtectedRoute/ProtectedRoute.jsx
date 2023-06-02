import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getState } from '../../store/slices/user'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const dispatch = useDispatch()

  const isAllowed = dispatch(getState().payload.isAllowed)

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
