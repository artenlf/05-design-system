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
  isDateAvailable: boolean
}

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  calendarDateProps: CalendarDateButtonProps
  contentProps: TooltipContentProps
}
const date = new Date()
const currentDate = new Date(date)
const inAWeekDate = currentDate.setDate(currentDate.getDate() + 7)

function dateFormatted(date: number) {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
  }).format(date)
}

export function TooltipComponent(props: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer {...props}>
        <TooltipTrigger>
          <CalendarDateButton variant={props.calendarDateProps.variant}>
            {date.getDate()}
          </CalendarDateButton>
        </TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent
            isDateAvailable={props.calendarDateProps.variant === 'available'}
          />
        </Tooltip.Portal>
      </TooltipContainer>
    </Tooltip.Provider>
  )
}

function TooltipContent({ isDateAvailable }: TooltipContentProps) {
  return (
    <TooltipContentContainer>
      <time dateTime={inAWeekDate.toString()}>
        {`${dateFormatted(inAWeekDate)} - ${
          isDateAvailable ? 'available' : 'not available'
        }`}
      </time>
      <TooltipArrow />
    </TooltipContentContainer>
  )
}
