import { Box, TooltipComponent, TooltipProps } from '@artenlf-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: TooltipComponent,

  args: {
    triggerProps: {
      variant: 'available',
    },
    children: '23',
    contentProps: {
      message: 'October 23 - Avaible',
    },
  },
  argTypes: {
    triggerProps: {
      table: {
        disable: true,
      },
    },
    contentProps: {
      table: {
        disable: true,
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
} as Meta<TooltipProps>

export const Available: StoryObj<TooltipProps> = {}

export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    triggerProps: {
      variant: 'unavailable',
    },
    children: '23',
    contentProps: {
      message: 'October 23 - Unavailable',
    },
  },
}
