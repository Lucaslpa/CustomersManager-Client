import { Meta, Story } from '@storybook/react'
import { Customers } from '../../api/customerMock'
import { List, ListCustomersMobile, ListCustomersWeb } from './index'

export default {
  title: 'List',
  component: List,
} as Meta

export const Default: Story = (args) => <List {...args} customers={Customers} />

export const listMobile: Story = (args) => (
  <ListCustomersMobile {...args} customers={Customers} />
)

export const listWeb: Story = (args) => (
  <ListCustomersWeb onCheckAll={() => null} {...args} customers={Customers} />
)
