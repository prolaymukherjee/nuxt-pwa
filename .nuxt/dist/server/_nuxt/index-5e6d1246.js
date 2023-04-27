import { _ as __nuxt_component_0$1 } from "./VitePwaManifest-f22d9d2b.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-28d4e889.js";
import { mergeProps, withCtx, createVNode, useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc, a as useHead } from "../server.mjs";
import "hookable";
import { u as useFetch } from "./fetch-eb3b22f8.js";
import "destr";
import "devalue";
import "klona";
import "unhead";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "defu";
import "@unhead/ssr";
import "@unhead/shared";
import "h3";
import "ohash";
const ProductCard_vue_vue_type_style_index_0_scoped_f42ba0d0_lang = "";
const _sfc_main$1 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card text-center" }, _attrs))} data-v-f42ba0d0><img${ssrRenderAttr("src", `${__props.product.image}`)} class="thumb" data-v-f42ba0d0><p class="font-bold text-gray-500 m-4 truncate" data-v-f42ba0d0>${ssrInterpolate(__props.product.title)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/products/${__props.product.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="btn my-4" data-v-f42ba0d0${_scopeId}>View Details</p>`);
          } else {
            return [
              createVNode("p", { class: "btn my-4" }, "View Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f42ba0d0"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://fakestoreapi.com/products", "$U48yGv7YOO")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Nuxt APP | Products"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VitePwaManifest = __nuxt_component_0$1;
      const _component_ProductCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_VitePwaManifest, null, null, _parent));
      _push(`<div class="grid grid-cols-4 gap-5"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ProductCard, { product }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-5e6d1246.js.map
