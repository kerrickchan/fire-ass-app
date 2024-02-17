import '@locales'
import { rootStore } from '@store'
import { Stack } from 'expo-router/stack'
import React from 'react'
import { Provider } from 'react-redux'

export default function Layout() {
  return (
    <Provider store={rootStore}>
      <Stack />
    </Provider>
  )
}
