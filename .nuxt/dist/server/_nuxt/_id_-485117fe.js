import { mergeProps, useSSRContext, withAsyncContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useRoute, c as createError } from "../server.mjs";
import "hookable";
import { u as useFetch } from "./fetch-eb3b22f8.js";
import "destr";
import "devalue";
import "klona";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "defu";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "h3";
import "ufo";
import "ohash";
const ProductDetails_vue_vue_type_style_index_0_scoped_d30d51d1_lang = "";
const _sfc_main$1 = {
  __name: "ProductDetails",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-d30d51d1><div class="grid grid-cols-2 gap-10" data-v-d30d51d1><div class="p-7" data-v-d30d51d1><img${ssrRenderAttr("src", `${__props.product.image}`)} class="mx-auto my-7" data-v-d30d51d1></div><div class="p-7" data-v-d30d51d1><h2 class="text-4xl my-7" data-v-d30d51d1>${ssrInterpolate(__props.product.title)}</h2><p class="text-xl my-7" data-v-d30d51d1>Price - $${ssrInterpolate(__props.product.price)}</p><h3 class="font-bold border-b-2 mb-4 pb-2" data-v-d30d51d1>Product description:</h3><p class="mb-7" data-v-d30d51d1>${ssrInterpolate(__props.product.description)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d30d51d1"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { id } = useRoute().params;
    const uri = "https://fakestoreapi.com/products/" + id;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(uri, { key: id }, "$H3OxYP9tuC")), __temp = await __temp, __restore(), __temp);
    if (!product.value) {
      throw createError({ statusCode: 404, statusMessage: "Product not found" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductDetails = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ProductDetails, { product: unref(product) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-485117fe.js.map
