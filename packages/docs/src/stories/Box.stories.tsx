import { Box, BoxProps, Text } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Box component example</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
