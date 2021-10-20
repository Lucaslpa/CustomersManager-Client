import { Meta, Story } from '@storybook/react'
import { LabelStatus, props } from './index'

export default {
  title: 'LabelStatus',
  component: LabelStatus,
} as Meta

const Template: Story<props> = (args) => <LabelStatus {...args} />

export const Default = Template.bind({})
Default.args = {
  status: 'warning',
  text: 'Alguma coisa errada',
}
