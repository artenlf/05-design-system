import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 25px))` },
  to: { transform: 'translateX(0)' },
})

export const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 25px))` },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  width: 360,
  height: 82,
  padding: '$3 $4',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
  isolation: 'isolate',
  position: 'absolute',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 112,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastTitle = styled(Toast.Title, {
  all: 'unset',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: '$3',
  right: '$4',

  svg: {
    color: '$gray200',
  },
})
