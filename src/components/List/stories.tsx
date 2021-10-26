import { Meta, Story } from '@storybook/react'
import { clientes } from '../../api/customerMock'
import { List, ListMobile, ListWeb } from './index'

export default {
  title: 'List',
  component: List,
} as Meta

export const Default: Story = (args) => <List {...args} clients={clientes} />

export const listMobile: Story = (args) => (
  <ListMobile {...args} clients={clientes} />
)

export const listWeb: Story = (args) => <ListWeb {...args} clients={clientes} />
