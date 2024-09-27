import { HTMLAttributes } from 'react'

import { cn } from '@/theme/utils'

export default function UiDivider(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('w-full bg-componentPrimary h-[1px]', props.className)}
    />
  )
}
