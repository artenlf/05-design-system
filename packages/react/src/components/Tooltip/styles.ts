import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  maxWidth: '$64',
  minHeight: '$10',

  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
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

export const TooltipContentContainer = styled(Tooltip.Content, {
  padding: '$3 $4',
  borderRadius: '$sm',
  marginBottom: -16,
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: 'medium',
  position: 'relative',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  position: 'relative',
})
