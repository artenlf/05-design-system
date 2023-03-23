import {
  Box,
  CalendarDateButton,
  CalendarDateButtonProps,
} from '@artenlf-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/CalendarDateButton',
  component: CalendarDateButton,

  args: {
    variant: 'available',
  },
  argTypes: {
    variant: {
      options: ['available', 'unavailable'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            padding: '$16',
            alignItems: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<CalendarDateButtonProps>

export const Available: StoryObj<CalendarDateButtonProps> = {}
export const Unavailable: StoryObj<CalendarDateButtonProps> = {
  args: {
    variant: 'unavailable',
  },
}
