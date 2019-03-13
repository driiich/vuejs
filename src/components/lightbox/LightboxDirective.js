import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
  bind (el, binding) {
    let group = Object.keys(binding.modifiers)[0] === undefined ? 'default' : Object.keys(binding.modifiers)[0]
    store.addImage(binding.value, group)
    el.addEventListener('click', function (e) {
      e.preventDefault()
      store.open(binding.value, group)
    })
  },
  update (el, binding) {
    if (binding.oldValue === binding.value) {
      return false
    }
    let group = Object.keys(binding.modifiers)[0] === undefined ? 'default' : Object.keys(binding.modifiers)[0]
    store.remove(binding.oldValue, group)
    store.addImage(binding.value, group)
    el.addEventListener('click', function (e) {
      e.preventDefault()
      store.open(binding.value, group)
    })
  },
  unbind (el, binding) {
    let group = Object.keys(binding.modifiers)[0] === undefined ? 'default' : Object.keys(binding.modifiers)[0]
    store.remove(binding.value, group)
  }
})
