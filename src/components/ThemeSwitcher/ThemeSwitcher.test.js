import { fireEvent, screen } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { customRender } from '../../test-utils'
import '@testing-library/jest-dom'

describe('<ThemeSwitcher />', () => {
  it('тема меняется по клику', () => {
    customRender(<ThemeSwitcher />)

    const svgElement = screen.getByTestId('theme-switcher-svg')
    const useElement = screen.getByTestId('theme-switcher-use')

    expect(useElement.getAttribute('xlink:href')).toEqual('sprite.svg#theme-dark')

    fireEvent.click(svgElement)

    expect(useElement.getAttribute('xlink:href')).toEqual('sprite.svg#theme-dark')
  })
})
