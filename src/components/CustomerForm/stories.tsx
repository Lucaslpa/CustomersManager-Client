import { Meta, Story } from '@storybook/react'
import { CustomerForm } from './index'

export default {
  title: 'CustomerForm',
  component: CustomerForm,
} as Meta

const Template: Story = (args) => <CustomerForm {...args} />

export const Default = Template.bind({})
