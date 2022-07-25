import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e1ce7d0 = () => interopDefault(import('..\\pages\\NotFound.vue' /* webpackChunkName: "pages/NotFound" */))
const _b5b14eb4 = () => interopDefault(import('..\\pages\\screen_checklistIncompleto\\index.vue' /* webpackChunkName: "pages/screen_checklistIncompleto/index" */))
const _e130df48 = () => interopDefault(import('..\\pages\\screen_criarConta\\index.vue' /* webpackChunkName: "pages/screen_criarConta/index" */))
const _b4ba7ffc = () => interopDefault(import('..\\pages\\screen_cvMeioAmbiente\\index.vue' /* webpackChunkName: "pages/screen_cvMeioAmbiente/index" */))
const _6acf720a = () => interopDefault(import('..\\pages\\screen_cvSeguranca\\index.vue' /* webpackChunkName: "pages/screen_cvSeguranca/index" */))
const _a7e8307e = () => interopDefault(import('..\\pages\\screen_home\\index.vue' /* webpackChunkName: "pages/screen_home/index" */))
const _3ed6fe3c = () => interopDefault(import('..\\pages\\screen_ordemManutencao\\index.vue' /* webpackChunkName: "pages/screen_ordemManutencao/index" */))
const _2cb4b012 = () => interopDefault(import('..\\pages\\screen_qrCode\\index.vue' /* webpackChunkName: "pages/screen_qrCode/index" */))
const _cc14fe3c = () => interopDefault(import('..\\pages\\screen_tutorial\\index.vue' /* webpackChunkName: "pages/screen_tutorial/index" */))
const _6d852a9d = () => interopDefault(import('..\\pages\\screen_utilizacao\\index.vue' /* webpackChunkName: "pages/screen_utilizacao/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/NotFound",
    component: _2e1ce7d0,
    name: "NotFound"
  }, {
    path: "/screen_checklistIncompleto",
    component: _b5b14eb4,
    name: "screen_checklistIncompleto"
  }, {
    path: "/screen_criarConta",
    component: _e130df48,
    name: "screen_criarConta"
  }, {
    path: "/screen_cvMeioAmbiente",
    component: _b4ba7ffc,
    name: "screen_cvMeioAmbiente"
  }, {
    path: "/screen_cvSeguranca",
    component: _6acf720a,
    name: "screen_cvSeguranca"
  }, {
    path: "/screen_home",
    component: _a7e8307e,
    name: "screen_home"
  }, {
    path: "/screen_ordemManutencao",
    component: _3ed6fe3c,
    name: "screen_ordemManutencao"
  }, {
    path: "/screen_qrCode",
    component: _2cb4b012,
    name: "screen_qrCode"
  }, {
    path: "/screen_tutorial",
    component: _cc14fe3c,
    name: "screen_tutorial"
  }, {
    path: "/screen_utilizacao",
    component: _6d852a9d,
    name: "screen_utilizacao"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
