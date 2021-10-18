import { Meta, Story } from '@storybook/react'
import { TextField, props } from './index'

export default {
  title: 'TextField',
  component: TextField,
} as Meta

const Template: Story<props> = (args) => <TextField {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Senha',
}
