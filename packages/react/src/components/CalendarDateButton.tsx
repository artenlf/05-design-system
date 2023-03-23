import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const CalendarDateButton = styled('button', {
  all: 'unset',
  padding: '$4 $6',
  borderRadius: '$sm',
  color: '$white',
  fontFamily: '$default',
  lineHeight: '$base',

  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  variants: {
    variant: {
      available: {
        backgroundColor: '$gray600',
      },

      unavailable: {
        backgroundColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    variant: 'available',
  },
})

export interface CalendarDateButtonProps
  extends ComponentProps<typeof CalendarDateButton> {
  as?: ElementType
}

CalendarDateButton.displayName = 'CalendarDateButton'
