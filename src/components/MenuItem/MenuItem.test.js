import { screen, render, fireEvent } from '@testing-library/react'
import MenuItem from './MenuItem'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('<MenuItem />', () => {
  it('На пункт меню вызывается онклик', () => {
    const cb = jest.fn()
    render(
      <BrowserRouter>
        <MenuItem text="Menu Item" onClick={cb} />
      </BrowserRouter>
    )

    fireEvent.click(screen.getByText('Menu Item'))
    expect(cb).toBeCalledTimes(1)
  })

  it('Пункт Мой плейлист /favourites', () => {
    render(
      <BrowserRouter>
        <MenuItem text="Мой плейлист" link="/favourites" />
      </BrowserRouter>
    )

    expect(screen.getByRole('link', { name: 'Мой плейлист' })).toHaveAttribute('href', '/favourites')
  })
})
