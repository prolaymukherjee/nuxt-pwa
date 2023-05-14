import { _ as __nuxt_component_0 } from './VitePwaManifest-f22d9d2b.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-28d4e889.mjs';
import { withAsyncContext, unref, useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as useHead, _ as _export_sfc } from './server.mjs';
import { u as useFetch } from './fetch-eb3b22f8.mjs';
import 'unhead';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'defu';
import '@unhead/ssr';
import '@unhead/shared';
import 'h3';
import './node-server.mjs';
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
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card text-center" }, _attrs))} data-v-ece817dd><img${ssrRenderAttr("src", `${__props.product.image}`)} class="thumb" data-v-ece817dd><p class="font-bold text-gray-500 m-4 truncate" data-v-ece817dd>${ssrInterpolate(__props.product.title)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/products/${__props.product.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="btn my-4" data-v-ece817dd${_scopeId}>View Details</p>`);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ece817dd"]]);
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
      const _component_VitePwaManifest = __nuxt_component_0;
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

export { _sfc_main as default };
//# sourceMappingURL=index-b1d37217.mjs.map
