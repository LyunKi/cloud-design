import { KV } from '@cloud-dragon/common-types'

export type NamespacedInstances<T> = KV<KV<T>>

export interface InstancesDescription<T> {
  namespace: string
  instances: KV<T>
}

export interface InstanceKey {
  namespace: string
  type: string
}

export abstract class Registry<T> {
  protected instances: NamespacedInstances<T> = {}

  public getInstancesByNamespace(namespace: string) {
    return this.instances[namespace]
  }

  public registerInstances(...descriptions: InstancesDescription<T>[]) {
    descriptions.forEach((description) => {
      const { namespace, instances } = description
      if (!this.instances[namespace]) {
        this.instances[namespace] = {}
      }
      const namespaceInstances = this.getInstancesByNamespace(namespace)!
      Object.assign(namespaceInstances, instances)
    })
  }

  public getInstance(instanceType: InstanceKey): T | undefined {
    const { namespace, type } = instanceType
    return this.instances[namespace]?.[type]
  }
}
