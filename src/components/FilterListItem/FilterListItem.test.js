import { screen, render, fireEvent } from '@testing-library/react'
import FilterListItem from './FilterListItem'
import '@testing-library/jest-dom'

describe('<FilterListItem />', () => {
  it('На ссылке вызывается onClick', () => {
    const cb = jest.fn()
    render(<FilterListItem onClick={cb} text="Filter List Item" />)

    fireEvent.click(screen.getByText('Filter List Item'))
    expect(cb).toBeCalledTimes(1)
  })

  it('Выбранный пункт имеет класс активности', () => {
    render(<FilterListItem text="Filter List Item" isSelected="true" />)

    expect(screen.getByText('Filter List Item')).toHaveClass('dropdown__item_selected')
  })
})
