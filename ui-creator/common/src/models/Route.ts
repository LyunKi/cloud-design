import { View } from './View'

export interface RouteItem {
  name: string
  view: View
}

export interface RouteGroup {
  options: any
  items: RouteItem[]
}

export interface Route {
  initialRouteName: string
  groups: RouteGroup[]
}
