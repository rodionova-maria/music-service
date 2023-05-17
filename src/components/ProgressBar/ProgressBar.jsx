import { useState } from 'react'
import s from './ProgressBar.module.scss'
import { useEffect } from 'react'
// import { useEffect } from 'react'

function ProgressBar({ audioRef, progressBarRef, duration }) {
  const [timeProgress, setTimeProgress] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      updateWidth()
    }, 300)
    return () => {
      clearInterval(t)
    }
  })

  function updateWidth() {
    setTimeProgress(audioRef.current.currentTime)
    progressBarRef.current.value = timeProgress || 0
    progressBarRef.current.style.setProperty('--range-progress', `${(timeProgress / duration) * 100}%`)
  }

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value
    updateWidth()
  }

  return <input type="range" defaultValue={timeProgress} className={s['bar__player-progress']} ref={progressBarRef} onChange={handleProgressChange} />
}

export default ProgressBar
