import { View } from './View'

export interface RouteItem {
  name: string
  view: View
}

export interface RouteGroup {
  name: string
  items: RouteItem[]
}

export interface Navigation {
  initialRouteName: string
  groups: RouteGroup[]
}

export interface Navigator {
  navigate(route: string): any
}
