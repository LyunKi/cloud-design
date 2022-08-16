import { createNavigationContainerRef } from '@react-navigation/native'
import { View } from './View'

export interface RouteItem {
  name: string
  view: View
}

export interface RouteGroup {
  items: RouteItem[]
}

export interface Navigation {
  initialRouteName: string
  groups: RouteGroup[]
}

export const Navigator = createNavigationContainerRef()
