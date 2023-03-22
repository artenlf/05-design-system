import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContentContainer,
  TooltipTrigger,
} from './styles'

interface TooltipTriggerProps extends ComponentProps<typeof TooltipTrigger> {}

interface TooltipContentProps
  extends ComponentProps<typeof TooltipContentContainer> {
  message?: string
}

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  triggerProps: TooltipTriggerProps
  contentProps: TooltipContentProps
}

export function TooltipComponent(props: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer {...props}>
        <TooltipTrigger variant={props.triggerProps.variant}>
          {props.children}
        </TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent message={props.contentProps.message} />
        </Tooltip.Portal>
      </TooltipContainer>
    </Tooltip.Provider>
  )
}

function TooltipContent({ message }: TooltipContentProps) {
  return (
    <TooltipContentContainer>
      {message}
      <TooltipArrow />
    </TooltipContentContainer>
  )
}
