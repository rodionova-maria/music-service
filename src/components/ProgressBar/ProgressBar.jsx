import { useState } from 'react'
import s from './ProgressBar.module.scss'
import { useEffect } from 'react'
// import { useEffect } from 'react'

function ProgressBar({ audioRef, progressBarRef, duration }) {
  const [timeProgress, setTimeProgress] = useState(0)

  useEffect(() => {
    setInterval(() => {
      updateWidth()
    }, 300)
  })

  function updateWidth() {
    if (!audioRef.current.ended) {
      setTimeProgress(audioRef.current.currentTime)
      progressBarRef.current.value = timeProgress
      progressBarRef.current.style.setProperty('--range-progress', `${(timeProgress / duration) * 100}%`)
    }
  }

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
  }

  return <input type="range" defaultValue="0" className={s['bar__player-progress']} ref={progressBarRef} onChange={handleProgressChange} />
}

export default ProgressBar
