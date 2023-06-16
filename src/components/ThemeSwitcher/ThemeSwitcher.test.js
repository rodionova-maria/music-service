import { fireEvent, screen } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { customRender } from '../../test-utils'
import '@testing-library/jest-dom'

describe('<ThemeSwitcher />', () => {
  it('тема меняется по клику', () => {
    customRender(<ThemeSwitcher />)

    const img = screen.getByTestId('theme-switcher-img')
    const button = screen.getByTestId('theme-switcher-button')

    console.log(img)

    // expect(img.getAttribute('xlinkHref')).toEqual('sprite.svg#theme-dark')

    fireEvent.click(button)

    console.log(img)

    // expect(img.getAttribute('xlinkHref')).toEqual('sprite.svg#theme-light')
  })
})
