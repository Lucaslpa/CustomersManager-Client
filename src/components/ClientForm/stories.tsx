import { Meta, Story } from '@storybook/react'
import { ClientForm } from './index'

export default {
  title: 'ClientForm',
  component: ClientForm,
} as Meta

const Template: Story = (args) => <ClientForm {...args} />

export const Default = Template.bind({})
