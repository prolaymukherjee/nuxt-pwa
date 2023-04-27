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
const index_vue_vue_type_style_index_0_scoped_e06dcf6c_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_VitePwaManifest = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e06dcf6c>`);
  _push(ssrRenderComponent(_component_VitePwaManifest, null, null, _parent));
  _push(`<h2 data-v-e06dcf6c>Home</h2><p data-v-e06dcf6c>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus, porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?</p><p data-v-e06dcf6c>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus, porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e06dcf6c"]]);
export {
  index as default
};
//# sourceMappingURL=index-00a49f12.js.map
