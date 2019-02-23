/// <reference path="../../src/shims-vue.d.ts" />

import Vue from 'vue'
import { wait } from './specHelpers';
import App from '../../src/App.vue'

Vue.config.devtools = false

export const renderApp = () => {
  removeExistingAppIfNecessary()
  createTestAppHolder()

  globalTestData().vueInstance = new Vue({
    render: h => h(App),
  }).$mount('#vue-test-app')

  return wait()
}

const createTestAppHolder = () => {
  const holder = document.createElement('div')
  holder.id = "vue-test-holder"
  
  const div = document.createElement('div')
  div.id = "vue-test-app"
  holder.appendChild(div)
  
  document.querySelector("body").appendChild(holder)
}

const removeExistingAppIfNecessary = () => {
  var existingHolder = document.querySelector("#vue-test-holder")
  if (existingHolder) {
      globalTestData().vueInstance.$destroy()
      document.body.removeChild(existingHolder);
  }
}

const globalTestData = () => {
  window['TestNamespace'] = window['TestNamespace'] || {}
  return window['TestNamespace']
}