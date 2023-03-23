import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import {
  CalendarDateButton,
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {}

export function ToastComponent() {
  const [toastOpen, setToastOpen] = useState(false)
  const currentDate = new Date()
  const dateToCompare = new Date(currentDate)
  const inAWeekDate = dateToCompare.setDate(dateToCompare.getDate() + 7)

  function dateFormatted(date: number) {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
    }).format(date)
  }

  return (
    <Toast.Provider swipeDirection="right">
      <CalendarDateButton
        onClick={() => {
          setToastOpen(true)
        }}
      >
        {new Date().getDate()}
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
