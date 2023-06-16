import { screen } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { customRender } from '../../test-utils'
import '@testing-library/jest-dom'

describe('<ThemeSwitcher />', () => {
  it('тема меняется по клику', () => {
    customRender(<ThemeSwitcher />)

    const svgElement = screen.getByTestId('theme-switcher-button')

    expect(svgElement).toBeInTheDocument()

    const bodyStyle = getComputedStyle(document.body)
    const color = bodyStyle.getPropertyValue('--color-basic-text')

    console.log('color', color)
  })
})
