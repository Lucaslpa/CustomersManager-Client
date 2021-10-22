import { Meta, Story } from '@storybook/react'
import { ClientMobile as Mobile, ClientWeb as Web } from './index'
import { cliente } from '../../api/ClienteMock'

export default {
  title: 'Client',
  component: Mobile,
} as Meta

export const clientMobile: Story = (args) => (
  <Mobile client={cliente} {...args} />
)

export const clientWeb: Story = (args) => <Web client={cliente} {...args} />
