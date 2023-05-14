import { _ as __nuxt_component_0 } from "./VitePwaManifest-f22d9d2b.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "defu";
import "@unhead/ssr";
import "@unhead/shared";
import "h3";
import "ufo";
const about_vue_vue_type_style_index_0_scoped_61efe491_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_VitePwaManifest = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-61efe491>`);
  _push(ssrRenderComponent(_component_VitePwaManifest, null, null, _parent));
  _push(`<h2 data-v-61efe491>About</h2><p data-v-61efe491>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam minima unde nemo harum quam maxime optio quos corrupti. Eum sapiente facere nemo, laborum ullam non cum fuga quas eveniet harum molestiae minus atque vel ratione illo quia, iure commodi dicta porro excepturi quam. Facere, commodi corrupti ipsam neque totam reprehenderit laboriosam laborum veniam est quo, repellat saepe impedit labore?</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-61efe491"]]);
export {
  about as default
};
//# sourceMappingURL=about-5a5062d1.js.map
