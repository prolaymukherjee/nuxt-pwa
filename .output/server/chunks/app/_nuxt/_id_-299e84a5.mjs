import { withAsyncContext, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useRoute, c as createError, _ as _export_sfc } from '../server.mjs';
import { u as useFetch } from './fetch-eb3b22f8.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'defu';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'h3';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {
  __name: "ProductDetails",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-6fc0ec63><div class="grid grid-cols-2 gap-10" data-v-6fc0ec63><div class="p-7" data-v-6fc0ec63><img${ssrRenderAttr("src", `${__props.product.image}`)} class="mx-auto my-7" data-v-6fc0ec63></div><div class="p-7" data-v-6fc0ec63><h2 class="text-4xl my-7" data-v-6fc0ec63>${ssrInterpolate(__props.product.title)}</h2><p class="text-xl my-7" data-v-6fc0ec63>Price - $${ssrInterpolate(__props.product.price)}</p><h3 class="font-bold border-b-2 mb-4 pb-2" data-v-6fc0ec63>Product description:</h3><p class="mb-7" data-v-6fc0ec63>${ssrInterpolate(__props.product.description)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6fc0ec63"]]);
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-299e84a5.mjs.map
