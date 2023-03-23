import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import { CalendarDateButton } from '../CalendarDateButton'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {}

export function ToastComponent() {
  const [toastOpen, setToastOpen] = useState(false)
  const date = new Date()
  const currentDate = new Date(date)
  const inAWeekDate = currentDate.setDate(currentDate.getDate() + 7)

  function dateFormatted(date: number) {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      hour: 'numeric',
    }).format(date)
  }

  return (
    <Toast.Provider swipeDirection="right">
      <CalendarDateButton
        onClick={() => {
          setToastOpen(true)
        }}
      >
        {date.getDate()}
      </CalendarDateButton>

      <ToastRoot open={toastOpen} onOpenChange={setToastOpen}>
        <ToastTitle>Appointment scheduled</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={inAWeekDate.toString()}>
            {dateFormatted(inAWeekDate)}
          </time>
        </ToastDescription>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </Toast.Provider>
  )
}
