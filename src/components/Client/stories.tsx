import { Meta, Story } from '@storybook/react'
import { ClientMobile as Mobile, ClientWeb as Web } from './index'

export default {
  title: 'Client',
  component: Mobile,
} as Meta

export const clientMobile: Story = (args) => <Mobile {...args} />

export const clientWeb: Story = (args) => <Web {...args} />
