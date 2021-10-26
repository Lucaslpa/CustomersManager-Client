import { Meta, Story } from '@storybook/react'
import { CustomerMobile as Mobile, CustomerWeb as Web } from './index'
import { Customer } from '../../api/customerMock'

export default {
  title: 'Customers',
  component: Mobile,
} as Meta

export const clientMobile: Story = (args) => (
  <Mobile customer={Customer} {...args} />
)

export const clientWeb: Story = (args) => <Web customer={Customer} {...args} />
