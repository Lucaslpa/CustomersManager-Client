import { useState, useEffect } from 'react'
import { screen } from '@testing-library/dom'
import { LabelStatus } from '.'
import { renderConfig } from '../../utils/renderConfig'

describe('LabelStatus', () => {
  it('Should render label with warning', () => {
    renderConfig(<LabelStatus text="Successo" status="warning" />)
    const label = screen.getByLabelText(/warning/gi)
    expect(label).toMatchSnapshot()
    expect(label).toHaveStyleRule('background-color', '#fa1919')
  })
  it('Should render label with success', () => {
    renderConfig(<LabelStatus text="Successo" status="success" />)
    const label = screen.getByLabelText(/success/gi)
    expect(label).toMatchSnapshot()
    expect(label).toHaveStyleRule('background-color', '#02b514')
  })
})
