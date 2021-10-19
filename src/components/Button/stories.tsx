import { Meta, Story } from '@storybook/react'
import { Alarm } from '@styled-icons/bootstrap'
import { Button, props } from './index'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<props> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithImage = Template.bind({})
WithImage.args = { Icon: <Alarm width={20} />, label: 'icon' }
