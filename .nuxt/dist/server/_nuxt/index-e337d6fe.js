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
const index_vue_vue_type_style_index_0_scoped_764470ae_lang = "";
const _sfc_main = {
  name: "AddToHomeScreen",
  data: () => ({
    deferredPrompt: null
  }),
  mounted() {
    this.captureEvent();
  },
  methods: {
    captureEvent() {
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
      });
    },
    clickCallback() {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted")
          ;
        this.deferredPrompt = null;
      });
    },
    async share() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "My App",
            text: "Check out My App!",
            url: window.location.href
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      }
    },
    handleTouchStart(event) {
      alert("Touch started", event);
    },
    handleTouchMove(event) {
      alert("Touch moved", event);
    },
    handleTouchEnd(event) {
      alert("Touch ended", event);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VitePwaManifest = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-764470ae>`);
  _push(ssrRenderComponent(_component_VitePwaManifest, null, null, _parent));
  _push(`<h2 data-v-764470ae>Home</h2><p data-v-764470ae>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus, porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?</p><p data-v-764470ae>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus, porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?</p>`);
  if (_ctx.deferredPrompt) {
    _push(`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-v-764470ae> Install Home Screen Button </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3" data-v-764470ae>Share</button><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3" data-v-764470ae>Touch me</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-764470ae"]]);
export {
  index as default
};
//# sourceMappingURL=index-e337d6fe.js.map
