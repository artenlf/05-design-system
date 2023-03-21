import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  maxWidth: '$64',
  minHeight: '$10',

  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: 'medium',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
