<style src="./lightbox.scss" lang="scss"></style>

<template>
  <transition name="lightbox-fade">
    <div class="lightbox" v-if="image" @click="close">
      <transition :name="transition">
        <lightbox-image :image="image" :key="image"></lightbox-image>
      </transition>
      <div class="lightbox__close" @click="close"></div>
      <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"></div>
      <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"></div>
    </div>
  </transition>
</template>

<script>
  import './LightboxDirective'
  import LightboxImage from './LightboxImage.vue'
  import store from './LightboxStore'

  export default {
    components: { LightboxImage },
    data () {
      return {
        state: store.state,
        direction: 'next'
      }
    },
    methods: {
      close () { store.close() },
      next () {
        this.direction = 'next'
        store.next()
      },
      prev () {
        this.direction = 'prev'
        store.prev()
      }
    },
    computed: {
      image () { return this.state.image },
      transition () {
        return 'lightbox-' + this.direction
      }
    }
  }
</script>
