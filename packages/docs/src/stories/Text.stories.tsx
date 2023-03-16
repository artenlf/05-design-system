import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas delectus minima vitae, asperiores deserunt nisi ex atque! Quo vitae repellat esse veritatis nostrum vero, pariatur excepturi facere ut, fugit quae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
