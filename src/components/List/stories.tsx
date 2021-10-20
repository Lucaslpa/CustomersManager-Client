import { Meta, Story } from '@storybook/react'
import { List, ListMobile, ListWeb } from './index'

export default {
  title: 'List',
  component: List,
} as Meta

export const Default: Story = (args) => <List {...args} />

export const listMobile: Story = (args) => <ListMobile {...args} />

export const listWeb: Story = (args) => <ListWeb {...args} />
