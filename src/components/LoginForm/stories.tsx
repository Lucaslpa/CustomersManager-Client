import { Meta, Story } from '@storybook/react'
import { LoginForm } from './index'

export default {
  title: 'LoginForm',
  component: LoginForm,
} as Meta

const Template: Story = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
