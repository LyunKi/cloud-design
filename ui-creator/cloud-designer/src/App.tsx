import { CloudRnAppBuilder } from '@ui-creator/cloud-builder'
import { WidgetDep } from '@ui-creator/common'
import { KV } from '@cloud-dragon/common-types'
import AppLoading from 'expo-app-loading'
import React, { useEffect, useState } from 'react'
import { AppConfig } from './config/app'
import Logo from './assets/icons/Logo'

const DesignerBuilder = new CloudRnAppBuilder(AppConfig.name)
const DEFAULT_NAMESPACE = '@ui-creator/cloud-designer'

async function parseWidgetDeps(widgetDeps: WidgetDep[]) {
  const tasks = widgetDeps.map(async (dep) => {
    const { name, specifiers } = dep
    const mod: any = await import('@cloud-design/components')
    const instances: KV = {}
    specifiers.forEach((specifier) => {
      const { name, alias } = specifier
      instances[alias ?? name] = mod[name]
    })
    DesignerBuilder.widgetRegistry.registerInstances({
      namespace: name,
      instances,
    })
  })
  await Promise.all(tasks)
}

function registerWidgets() {
  DesignerBuilder.widgetRegistry.registerInstances({
    namespace: DEFAULT_NAMESPACE,
    instances: {
      Logo,
    },
  })
}

function useLoadResources() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    async function loadApplication() {
      try {
        registerWidgets()
        await parseWidgetDeps(AppConfig.widgetDeps)
      } catch (e) {
        console.error('Failed to load widget deps:', e)
      } finally {
        setLoaded(true)
      }
    }
    loadApplication()
  }, [])
  return loaded
}

export default function App() {
  const loaded = useLoadResources()
  if (!loaded) {
    return <AppLoading />
  }
  return DesignerBuilder.build(AppConfig)
}
