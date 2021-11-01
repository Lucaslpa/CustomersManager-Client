import { Meta, Story } from '@storybook/react'
import { DeleteAll, props } from './index'

export default {
  title: 'DeleteAll',
  component: DeleteAll,
} as Meta

const Template: Story<props> = () => <DeleteAll />

export const Default = Template.bind({})
Default.args = { hidden: false }
