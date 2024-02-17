import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextProps } from 'react-native-ui-lib'

export function BodyText({ children, ...props }: PropsWithChildren<TextProps>) {
  const { t } = useTranslation()
  const text = t(children as string)

  return (
    <Text {...props}>{text}</Text>
  )
}
