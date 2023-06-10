import { useSelector } from 'react-redux'
import { selectCurrentTrackID } from '../../store/slices/user'
import BarPlayer from '../BarPlayer/BarPlayer'

const Bar = ({ data }) => {
  const currentTrackID = useSelector(selectCurrentTrackID)

  return currentTrackID ? <BarPlayer tracks={data} id={currentTrackID} /> : null
}

export default Bar
