import { useState } from 'react'

function FilterButton({ type, text }) {
  const [active, setDropdownState] = useState(false)

  const handleDropdownClick = () => setDropdownState(!active)

  return (
    <div
      onClick={handleDropdownClick}
      className={`filter__button button-${type} _btn-text ${
        active ? 'filter__button_active' : ''
      }`}
    >
      {text}

      {active && (
        <div className="dropdown">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilterButton
