import { composableNames } from 'unhead';
import { defineComponent, ref } from 'vue';
import { a as useHead } from './server.mjs';

const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  async setup() {
    if (pwaInfo) {
      const meta = ref({ link: [] });
      useHead(meta);
      const { webManifest } = pwaInfo;
      if (webManifest) {
        const { href, useCredentials } = webManifest;
        if (useCredentials) {
          meta.value.link.push({
            rel: "manifest",
            href,
            crossorigin: "use-credentials"
          });
        } else {
          meta.value.link.push({
            rel: "manifest",
            href
          });
        }
      }
    }
    return () => null;
  }
});

export { __nuxt_component_0 as _ };
//# sourceMappingURL=VitePwaManifest-f22d9d2b.mjs.map
