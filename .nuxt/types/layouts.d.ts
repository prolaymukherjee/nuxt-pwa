import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "products"
declare module "C:/Users/mahmudul/OneDrive - Bangladesh University of Professionals/Desktop/Vue project/nuxt-pwa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}