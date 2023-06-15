import { screen, render, fireEvent } from '@testing-library/react'
import MenuItem from './MenuItem'

describe('<MenuItem />', () => {
  it('На пункт меню вызывается онклик', () => {
    const cb = jest.fn()
    render(<MenuItem onclick={cb} />)

    fireEvent.click(screen.getByRole('link', { name: 'Выйти' }))
    expect(cb).toBeCalledTimes(1)
  })

  it('Пункт главная имеет ссылку /', () => {
    render(<MenuItem />)
    expect(screen.getByRole('link', { name: 'Главная' })).toHaveAttribute('href', '/')
  })

  it('Пункт Мой плейлист имеет ссылку /favourites', () => {
    render(<MenuItem />)
    expect(screen.getByRole('link', { name: 'Мой плейлист' })).toHaveAttribute('href', '/favourites')
  })
})
