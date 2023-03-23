import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import {
  CalendarDateButton,
  CalendarDateButtonProps,
} from '../CalendarDateButton'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContentContainer,
  TooltipTrigger,
} from './styles'

interface TooltipContentProps
  extends ComponentProps<typeof TooltipContentContainer> {
  message?: string
}

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  calendarDateProps: CalendarDateButtonProps
  contentProps: TooltipContentProps
}

export function TooltipComponent(props: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer {...props}>
        <TooltipTrigger>
          <CalendarDateButton variant={props.calendarDateProps.variant}>
            {new Date().getDate()}
          </CalendarDateButton>
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
