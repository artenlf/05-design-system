import { ToastComponent, ToastProps } from '@artenlf-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Toast',
  component: ToastComponent,

  args: {},
  argTypes: {},
  // decorators: [
  //   (Story) => {
  //     return (
  //       <Box
  //         css={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           padding: '$16',
  //           alignItems: 'center',
  //         }}
  //       >
  //         {Story()}
  //       </Box>
  //     )
  //   },
  // ],
} as Meta<ToastProps>

export const Available: StoryObj<ToastProps> = {}
