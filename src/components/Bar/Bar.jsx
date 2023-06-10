import { useSelector } from 'react-redux'
import { selectCurrentTrackID } from '../../store/slices/user'
import BarPlayer from '../BarPlayer/BarPlayer'

const Bar = ({ data }) => {
  let currentTrackID = useSelector(selectCurrentTrackID)

  //   const dispatch = useDispatch()
  //   const [id, setID] = useState(currentTrackID)

  //   if (!data.some((track) => track.id === id)) {
  //     setID(null)
  //     dispatch(setCurrentTrackID({ id: null }))
  //   }

  //   return id ? <BarPlayer tracks={data} id={id} /> : null

  return currentTrackID ? <BarPlayer tracks={data} id={currentTrackID} /> : null
}

export default Bar
