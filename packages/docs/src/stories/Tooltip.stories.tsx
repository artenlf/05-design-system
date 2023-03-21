import { Box, TooltipComponent, TooltipProps } from '@artenlf-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: TooltipComponent,

  args: {
    children: 'Test tooltip text',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            padding: '$8',
            alignItems: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Avaible: StoryObj<TooltipProps> = {
  args: {
    children: 'October 23 - Avaible',
  },
}

export const Unavaible: StoryObj<TooltipProps> = {
  args: {
    children: 'October 27 - Unavaible',
  },
}
