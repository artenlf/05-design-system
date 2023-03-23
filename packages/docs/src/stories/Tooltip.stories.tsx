import { Box, TooltipComponent, TooltipProps } from '@artenlf-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: TooltipComponent,

  args: {
    calendarDateProps: {
      variant: 'available',
    },
  },
  argTypes: {
    calendarDateProps: {
      control: false,
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
} as Meta<TooltipProps>

export const Available: StoryObj<TooltipProps> = {}

export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    calendarDateProps: {
      variant: 'unavailable',
    },
  },
}
