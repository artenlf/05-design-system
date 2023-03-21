import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function TooltipComponent(props: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer {...props}>
        <Tooltip.Trigger>23</Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent>
            {props.children}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </TooltipContainer>
    </Tooltip.Provider>
  )
}
